import jwt from 'jsonwebtoken'



const userAuth =(req,res,next)=>{
    try {
        const token=req.cookies.token

        if(!token){
            return res.status(401).json({message:"Unauthorized no token provided"})
        }

        const tokenDecoded=jwt.verify(token,process.env.JWT_SECRECT)
 

        req.user = tokenDecoded

        next()
    } catch (error) {
        res.status(401).json({message:"Unauthorized person"})
    }

}


export default userAuth