import videoService from '../services/video.service.js'

const videoController = {

    videoList: async(req,res) => {

        const video =  await videoService.videoList(req);
        res.json(video); 

    }

}

export default videoController