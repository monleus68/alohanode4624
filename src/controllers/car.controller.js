import carService from '../services/car.service.js'

const carController = {

    carList: async(req,res) => {

        const cars =  await carService.carList(req);
        res.json(cars); 

    }

}

export default carController