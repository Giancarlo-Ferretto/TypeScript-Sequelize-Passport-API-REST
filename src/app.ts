import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import sequelize from './database';
import { basicSeeder } from './seeders/basic.seeder';
import router from './routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//hello world
app.get('/', (request:any, response:any) => {
    return response.status(200).json({
        message:'Vigili API',
        author:'Giancarlo-Ferretto'}
    );
});

app.use('/', router);

(async () => {
    await sequelize.sync({force: false});
  
    app.listen(app.get('port'), () => {
        console.log(`[Vigili-APP] Servidor encendido en el puerto ${app.get('port')} 👍!`);
    });

    //basicSeeder();
})();

export default app; 