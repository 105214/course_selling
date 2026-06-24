import jwt from 'jsonwebtoken'


const GenerateToken = (id)=>{

    return jwt.sign({id},process.env.JWT_SECRECT,{
        expiresIn:"1d"
    })
}

export default GenerateToken