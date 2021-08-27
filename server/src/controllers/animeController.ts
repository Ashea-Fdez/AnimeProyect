import { Request, Response } from 'express';
//import { createPool } from 'mysql';
import pool from '../database';

class AnimeController {

    public async list (req: Request, res: Response): Promise<void> {
        const anime = await pool.query('SELECT * FROM anime');
        res.json(anime);
    }
    public async getOne  (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const animes = await pool.query('SELECT * FROM anime WHERE id = ?', [id]);
        console.log(animes.length);
        if (animes.length > 0) {
            return res.json(animes[0]);
        }
        res.status(404).json({ text: "That anime doesn't exits" });
    }

    public async create (req: Request, res: Response): Promise<void>{
        const result = await pool.query('INSERT INTO anime set ?', [req.body]);
        res.json({ message: 'Anime Saved' });
    }
    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM anime WHERE id = ?', [id]);
        res.json({ message: "The anime was deleted" });
    }
    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const oldAnime = req.body;
        await pool.query('UPDATE anime set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The Anime was Updated" });
    }

}

const animeController = new AnimeController;
export default animeController;


