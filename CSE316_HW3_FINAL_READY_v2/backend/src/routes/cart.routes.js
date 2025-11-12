import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();
router.get('/', async (req,res,next)=>{try{const [rows]=await pool.query(`SELECT c.product_id AS productId,p.name,p.price,p.image_url AS imageUrl,c.quantity FROM cart c JOIN products p ON p.id=c.product_id ORDER BY c.product_id ASC`);res.json(rows);}catch(e){next(e);}});
router.post('/', async (req,res,next)=>{try{const {productId,quantity=1}=req.body||{};if(!productId)return res.status(400).json({error:'productId required'});await pool.query(`INSERT INTO cart (product_id,quantity) VALUES (?,?) ON DUPLICATE KEY UPDATE quantity=quantity+VALUES(quantity)`,[productId,quantity]);res.status(201).json({ok:true});}catch(e){next(e);}});
router.patch('/:productId', async (req,res,next)=>{try{const pid=Number(req.params.productId);const {quantity}=req.body||{};if(!quantity||quantity<1)return res.status(400).json({error:'quantity >=1 required'});await pool.query('UPDATE cart SET quantity=? WHERE product_id=?',[quantity,pid]);res.json({ok:true});}catch(e){next(e);}});
router.delete('/:productId', async (req,res,next)=>{try{const pid=Number(req.params.productId);await pool.query('DELETE FROM cart WHERE product_id=?',[pid]);res.json({ok:true});}catch(e){next(e);}});
export default router;
