var Mock = require('mockjs')
module.exports={
    "GET /api/musicinfo":(req,res)=>{
        res.json({
               musicinfo: Mock.mock({
                'list|10': [{singer:"@name",src:'@image()',des:'@cparagraph(1)',id:'@id',musicname:"@cword(3,5)"}],
              }),
              joinedsinger: Mock.mock({
                'list|5': [{singer:"@name",src:'@image()',des:'@cparagraph(1)',id:'@id',musicname:"@cword(3,5)"}],
              }),
        })
    }
}