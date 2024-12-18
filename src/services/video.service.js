import { PrismaClient } from "@prisma/client";
import models from "../common/sequelize/init.sequelize.js";

import { raw } from "mysql2";


const prisma = new PrismaClient(); 


const videoService = {

    videoList: async(req) => {

        try {
    

            const videos = await prisma.videos.findMany();
          
            return videos;
    
        } catch (error) {
            console.error('Error fetching videos:', error.message);
            res.status(500).json({ error: 'Failed to fetch videos' });
            
        }
    }


}

export default videoService;
