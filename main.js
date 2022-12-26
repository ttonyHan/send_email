//https://nodemailer.com/usage/
//https://mailtrap.io/inboxes/2024763/messages/3200740603
//npm install nodemailer

const nodemailer = require("nodemailer");
const email = {
    // "host":"",
    // "port":"",
    // "secure":false,
    // "auth":{
    //     "user":"",
    //     "pass":""
    // }    
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "f98f530ebf4255",
    pass: "dbbafe3095a447"
    }
        
}

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info) =>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
 };

let email_data = {
    from:"ttonytony@gmail.com",
    to:"ttonytony@gmail.com",
    subject:"테스트메일 입니다",
    text:"nodejs 메일 보내기"
}

send(email_data);