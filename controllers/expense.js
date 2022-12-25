const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const Expense=require('../models/expense');

exports.getBackend=(req,res,next)=>{
   Expense.findAll()
   .then((exp)=>{
       res.json(exp);
   })
   .catch((err)=>console.log(err))

//
}

exports.getFrontpage=(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','mainPage.html'));
}

exports.postExpDetails=(req,res,next)=>{
   const expenseAmount=req.body.expenseAmount;
   const description=req.body.description;
   const category=req.body.category;

   Expense.create({
      expenseAmount:expenseAmount,
      description:description,
      category:category

   })
   .then(()=>{
      // console.log(result);
      res.redirect('/expenses');
    

   })
   .catch((err)=>{
      res.send(`<h4>User-name or Phone Number already Exist, Please try with another data</h4>`);
   });

}
exports.on404Error=(req,res,next)=>{
   res.status(404).send(`<h3>Requested Page Not Found ☹</h3> <a href="/expenses">Go to Home Page</a> `);
}

exports.deleteById=(req,res,next)=>{
   const userId=req.params.Id;
   Expense.findByPk(userId)
    .then((appo)=>{//step to delete single product
        appo.destroy(); 
    })
    .then(
        (allAfterDel)=>{ // step to fetch all-products after deletion 
            res.json(allAfterDel);
        }
    )
    .catch(err=>{
        console.log(err)
    });
}

exports.getById=(req,res,next)=>{
   const userId=req.params.Id;
   Expense.findByPk(userId)
   .then((result)=>{
      res.json(result);
   })
   .catch(err=>{
      console.log(err)
   })
}