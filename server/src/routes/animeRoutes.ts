import { Router } from 'express';
import  animeController  from '../controllers/animeController';


class AnimeRoutes {

    public router: Router = Router();

    constructor(){
        this.config();


    }

    config(): void{
        this.router.get('/', animeController.list);
        this.router.get('/:id', animeController.getOne);
        this.router.post('/', animeController.create);
        this.router.delete('/:id',animeController.delete );
        this.router.put('/:id',animeController.update );
    }

}

const animeRoutes = new AnimeRoutes();
export default animeRoutes.router;
