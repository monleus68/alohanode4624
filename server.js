import express from 'express';
import rootRouter from './src/routers/root.router.js';

const app = express(); 


// middle ware giup phan giai du lieu tu json sang doi tuong js
app.use(express.json());
app.use(rootRouter);


app.use('/',
    (req,res,next) => {

        console.log('middleware 1')
        next();
    },

    (req,res,next) => {
        console.log('middleware 2')
        next()
    },
    
    
    (req,res,next) => {
        console.log('middleware 3')
        next()
    },
    (err,req,res,next) => {
        console.log('middle ware bat loi cuoi cung'); 
        next();
    }

    

)

// listen server 
app.listen(3074,'127.0.0.1', () => {

    console.log('Server is running on http://127.0.0.1:3373');
});

