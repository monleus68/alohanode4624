import express from 'express'
import videoRouter from './video.router.js'


const rootRouter = express.Router()


// rootrouter di gom router video
rootRouter.use('/video', videoRouter);




export default rootRouter;