import models from "../common/sequelize/init.sequelize.js";


const carService = {

    carList: async(req) => {

        try {
    
            const cars = await models.cars.findAll({raw:true}); 
          
            return cars;
    
        } catch (error) {
            console.error('Error fetching videos:', error.message);
            res.status(500).json({ error: 'Failed to fetch videos' });
            
        }
    }


}

export default carService;
