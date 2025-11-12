import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();
router.get('/', async (req,res,next)=>{try{const [rows]=await pool.query('SELECT id,name,category,price,image_url,description FROM products ORDER BY id ASC');res.json(rows);}catch(e){next(e);}});
router.get('/search', async (req,res,next)=>{try{const q=(req.query.q||'').toString();const [rows]=await pool.query(`SELECT id,name,category,price,image_url,description FROM products WHERE name LIKE ? OR category LIKE ? ORDER BY id ASC`,[`%${q}%`,`%${q}%`]);res.json(rows);}catch(e){next(e);}});
export default router;
