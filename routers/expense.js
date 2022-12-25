const express=require('express');
const path=require('path');
const router=express.Router();

const ExpenseController=require('../controllers/expense');


router.get('/',ExpenseController.getBackend);
router.get('/expenses',ExpenseController.getFrontpage);
router.post('/expenses',ExpenseController.postExpDetails);
router.delete('/:Id',ExpenseController.deleteById);
router.get('/:Id',ExpenseController.getById);



module.exports=router;