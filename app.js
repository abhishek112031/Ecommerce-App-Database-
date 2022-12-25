const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();
const exp=require('./routers/expense');
const sequelize=require('./util/database');
const expController=require('./controllers/expense')

app.use(bodyParser.urlencoded({ extended: false }));


app.use(exp);
app.use(expController.on404Error);

sequelize.sync()
.then((result)=>{
    // console.log(result);

    app.listen(4000);
})
.catch((err)=>{
    console.log(err);
})



