var Mock = require('mockjs')
module.exports={
    "GET /api/comment":(req,res)=>{
        res.json({
               Users: Mock.mock({
                'list|100': [{ name: '@city',src:'@image()',text:'@cparagraph(1)',id:'@id',name:"@name",phone:/^1[345678]\d{9}$/,isMale:"@boolean"}],
              }),
        })
    }
}