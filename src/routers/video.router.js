import express from "express";
import models from "../common/sequelize/init.sequelize.js";

const videoRouter = express.Router();


// video list router
videoRouter.get('/video-list', async(req,res) => {

    try {

        const videos = await models.videos.findAll({raw:true}); 
      
        res.json(videos);

    } catch (error) {
        console.error('Error fetching videos:', error.message);
        res.status(500).json({ error: 'Failed to fetch videos' });
        
    }
});


export default videoRouter


