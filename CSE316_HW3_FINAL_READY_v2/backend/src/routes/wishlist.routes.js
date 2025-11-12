import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();
router.get('/', async (req,res,next)=>{try{const [rows]=await pool.query(`SELECT w.product_id AS productId,p.name,p.price,p.image_url AS imageUrl FROM wishlist w JOIN products p ON p.id=w.product_id ORDER BY w.product_id ASC`);res.json(rows);}catch(e){next(e);}});
router.post('/', async (req,res,next)=>{try{const {productId}=req.body||{};if(!productId)return res.status(400).json({error:'productId required'});await pool.query('INSERT IGNORE INTO wishlist (product_id) VALUES (?)',[productId]);res.status(201).json({ok:true});}catch(e){next(e);}});
router.delete('/:productId', async (req,res,next)=>{try{const pid=Number(req.params.productId);await pool.query('DELETE FROM wishlist WHERE product_id=?',[pid]);res.json({ok:true});}catch(e){next(e);}});
export default router;
