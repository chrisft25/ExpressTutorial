const express= require('express');
const router= express.Router();

router.get('/',function(req,resp){
    resp.render("index.ejs");
    });
    
router.get('/prueba',(req,resp)=>{
    resp.render("prueba.ejs");
    });
    


module.exports = router;