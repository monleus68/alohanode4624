import express from 'express'
import videoRouter from './video.router.js'
import carRouter from './car.router.js';


const rootRouter = express.Router()


// rootrouter di gom router video
rootRouter.use('/video', videoRouter);

// rootrouter di gom car router
rootRouter.use('/car',carRouter);



export default rootRouter;