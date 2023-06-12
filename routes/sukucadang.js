const express = require('express')
const router = express.Router() 
const AlatBerat = require('../models/SukuCadang')
const SukuCadang = require('../models/SukuCadang')

//create 
router.post('/',async(req, res)=>{
    
    const sukucadangPost = new SukuCadang({
        NamaSukuCadang: req.body.NamaSukuCadang,
        Merk: req.body.Merk,
        image: req.body.image,
        Harga: req.body.Harga,
       
    })

    // simpan data dengan try catch
    try{
        //simpan datanya
        const sukucadang = await sukucadangPost.save()
        //beri response
        res.json(sukucadang)
    }catch(error){
        res.json({message: error})
    }
})


// read
router.get('/', async(req,res)=> {
    try{
        const sukucadang = await SukuCadang.find()
        res.json(sukucadang)
    }catch(error){
        res.json({message: error})
    }
})

router.put('/:sukucadangId', async(req, res) => {
    const data = {
        NamaSukuCadang: req.body.NamaSukuCadang,
        Merk: req.body.Merk,
        image: req.body.image,
        Harga: req.body.Harga,
    }

    try {
        const sukucadang = await SukuCadang.updateOne({_id: req.params.sukucadangId}, data)
        res.json(sukucadang)
    }catch(error){
        res.json({message: error})
    }
})

router.delete('/:sukucadangId', async(req, res) => {
    try {
        const sukucadang = await SukuCadang.deleteOne({_id: req.params.sukucadangId})
        res.json(sukucadang)
    }catch (error){
        res.json({message:error})
    }
})
module.exports = router