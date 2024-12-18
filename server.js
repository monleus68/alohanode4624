

import rootRouter from './src/routers/root.router.js';
import express from 'express';

const app = express(); 

app.use(rootRouter);



//code first

// create model from define

// listen server 
app.listen(3073,'127.0.0.1', () => {

    console.log('Success');
});

