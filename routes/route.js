const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');


router.get('/contacts',function(req,res,next){
   Contact.find(function(err,contacts){
        res.json(contacts);  
    });
});

router.post('/contact',function(req,res,next){
    var newcontact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        contactnumber:req.body.contactnumber
    });
    
    newcontact.save(function(err,contact){
        if(err){
            res.json(err+{msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});

router.delete('/contact/:id',function(req,res,next){
    Contact.remove({_id:req.params.id},function(err,result){
        if(err)
            {
                res.json(err);
            }
        else{
            res.json(result);
        }
    });
});

module.exports =router;