const express= require('express');
const router= express.Router();

router.get('/',(req,resp)=>{

    resp.json({
        miprimerApi: '¡Funciona!'
    });

});

module.exports = router;