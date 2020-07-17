var Mock = require('mockjs')
module.exports={
    "GET /api/images":(req,res)=>{
        res.json({
            Images: Mock.mock({
                'list|1000': [{ src:"@image('200x100, '#FF6600')"}],
              }),
        })
    }
}   