'use server'
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request){
    //here error
    let {name,password,pnumber,message} = await request.json();
    await mongoose.connect('mongodb+srv://abasfathel:J9cRrMECIaKuyY3c@cluster0.bhalhi1.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected')
    });
    let userschema=new mongoose.Schema({
        namex:String,
        passwordx:String,
        pnumberx:String,
        messagex:String
    })
    mongoose.models={}
    let newuser=new mongoose.model('information',userschema)
    let user=new newuser({
        namex:name,
        passwordx:password,
        pnumberx:pnumber,
        messagex:message
    })
    let a=await user.save()
    console.log(a)
    mongoose.connection.close()
    return NextResponse.json({user},{status:201})
}
