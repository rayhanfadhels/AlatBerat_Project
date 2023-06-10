const express = require('express')
const router = express.Router() 
const AlatBerat = require('../models/AlatBerat')

//create 
router.post('/',async(req, res)=>{
    
    const alatberatPost = new AlatBerat({
        NamaAlatBerat: req.body.NamaAlatBerat,
        Merk: req.body.Merk,
        image: req.body.image,
        Harga: req.body.Harga,
        Deskripsi: req.body.Deskripsi
    })

    // simpan data dengan try catch
    try{
        //simpan datanya
        const alatberat = await alatberatPost.save()
        //beri response
        res.json(alatberat)
    }catch(error){
        res.json({message: error})
    }
})


// read
router.get('/', async(req,res)=> {
    try{
        const alatberat = await AlatBerat.find()
        res.json(alatberat)
    }catch(error){
        res.json({message: error})
    }
})

router.put('/:alatberatId', async(req, res) => {
    const data = {
        NamaAlatBerat: req.body.NamaAlatBerat,
        Merk: req.body.Merk,
        image: req.body.image,
        Deskripsi: req.body.Deskripsi
    }

    try {
        const alatberat = await AlatBerat.updateOne({_id: req.params.alatberatId}, data)
        res.json(alatberat)
    }catch(error){
        res.json({message: error})
    }
})

router.delete('/:alatberatId', async(req, res) => {
    try {
        const alatberat = await AlatBerat.deleteOne({_id: req.params.alatberatId})
        res.json(alatberat)
    }catch (error){
        res.json({message:error})
    }
})
module.exports = router