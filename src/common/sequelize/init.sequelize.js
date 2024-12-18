import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";


// connect to database
const sequelize = new Sequelize('mysql://root:12345678@127.0.0.1:3307/node_buoi7')

// authenticate connect to database
sequelize.authenticate()
.then( () => {
    console.log('Connect to database successfully!')

}).catch( () =>{

    console.log('Failed to connect database')

}); 




//init all models
const models = initModels(sequelize); 



export default models;
