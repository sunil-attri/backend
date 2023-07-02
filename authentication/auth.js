const jwt=require('jsonwebtoken')
const secretKey='your-secret-key'

const authenticateToken = (token) => {
    if (token) {
      console.log("aaa");
      jwt.verify(token, secretKey, (error, decoded) => {
        console.log("bbb");
        if (error) {
          console.log("ccc");
          return JSON.stringify({
            res:false,
            userid:undefined
          })
        }
        else{
          console.log("ddd");
          const a={
                res:true,
                userid:decoded
            }
          console.log(a);
            return a.res
        }
      });
    } else {
      console.log("eee");
        return JSON.stringify({
            res:false,
            userid:undefined
        })
    }
};

module.exports=authenticateToken