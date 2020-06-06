var Mock = require('mockjs')
module.exports={
    "GET /api/Toplist/":(req,res)=>{

        res.json({
               Toplist: Mock.mock({
                'list|10': [{ singer:"@cname",'songtime|1-5.2':1 ,songname:'@ctitle(3, 5)',"id|100-10000000": 1}],
              }),
        })
    }   
}