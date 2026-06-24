import express from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import GenerateToken from '../utils/generatetoken.js'


const userSignup=async(req,res)=>{
    try {
        const {email,name,password,image,mobile}=req.body


        if(!email || !name || !password || !image || !mobile){
            return res.status(400).json({message:"All fields are required"})
        }

        const existingEmail=await User.findOne({email})

        if(existingEmail){
            return res.status(409).json({message:"User already exists"})
        }

        const saltRounds=10
        const hashPassword= await bcrypt.hash(password,saltRounds)

        const newUser = new User({
            email,
            name,
            password:hashPassword,
            image,
            mobile
        })

        
      const user=  await newUser.save()

      res.status(201).json({message:"profile created",data:
               {_id: user._id,
                email: user.email,
                name: user.name,
                image: user.image,
                mobile: user.mobile}})

    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
}

const userLogin=async(req,res)=>{
    try {
      const {email,password}  = req.body

      if(!email || !password){
        return res.status(400).json({message:"Invalid credentials"})
      }

      const loginUser = await User.findOne({email})

      if(!loginUser){
        return res.status(400).json({message:"User not Existing"})
      }
     
      const isMatch = await bcrypt.compare(password,loginUser.password)

      if(!isMatch){
        return res.status(400).json({message:"invalid credentials"})
      }

      const token= GenerateToken(loginUser._id)

    const { password: _, ...userWithoutPassword } = loginUser.toObject()
      res.status(200).json({message:"Login successfull",data:loginUser,token})
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }

}

const updateUser=async(req,res)=>{

  try {
    const {id}=req.body

    if(!image || !mobile){
      return res.status(400).json({message:"all fields required"})
    }

    const newUser = await User.findByIdAndUpdate(id)
  } catch (error) {
    
  }
}


export {userLogin,userSignup}