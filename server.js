

import rootRouter from './src/routers/root.router.js';
import express from 'express';

const app = express(); 


// Optional middleware
app.use(express.json());
app.use(rootRouter);




// listen server 
app.listen(3073,'127.0.0.1', () => {

    console.log('Server is running on http://127.0.0.1:3373');
});

