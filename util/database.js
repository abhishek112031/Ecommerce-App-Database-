const Sequelize= require("sequelize");

const sequelize=new Sequelize('expense-tracker','root','mysql@2022',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;