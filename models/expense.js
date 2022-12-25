const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    expenseAmount: Sequelize.FLOAT,

    description: {
        type: Sequelize.STRING,
        allowNull:false,
        // unique:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
        // unique:false
    }
 
});

module.exports=Expense;