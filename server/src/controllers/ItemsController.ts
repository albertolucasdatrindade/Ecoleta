import { Request, Response } from 'express';
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*'); 
    
        const serializedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                //lembra aqui pra depois voltar com o localhost
                image_url: `http://192.168.22.11:3333/uploads/${item.image}`, 
             };
        });
    
        return response.json(serializedItems);
     }
}

export default ItemsController;