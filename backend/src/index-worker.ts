// import nodemailer from 'nodemailer';
// import { EMAIL_ACCOUNT, EMAIL_PASSWORD } from '@config/environment';

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: EMAIL_ACCOUNT,
//         pass: EMAIL_PASSWORD,
//     },
// });

// const sendSMS = (number, message) => {
//     const mailOptions = {
//         from: EMAIL_ACCOUNT,
//         to: `${number}@viettel.com.vn`,
//         subject: 'lked',
//         text: message,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending SMS:', error);
//         } else {
//             console.log('SMS sent:', info.response);
//         }
//     });
// };

// sendSMS('0358037491', 'messs');

// const a = async () => {
//     console.log('-=====');
//     const data = {
//         email: 'vungovu00@gmail.com',
//         otp: '1234',
//     };
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: true,
//         auth: {
//             user: EMAIL_ACCOUNT,
//             pass: EMAIL_PASSWORD,
//         },
//     });

//     const infor = await transporter.sendMail({
//         from: `Ngô Duy Vũ <${EMAIL_ACCOUNT}>`,
//         to: data.email,
//         subject: 'OPT - Mã xác nhận',
//         text: 'OPT - Mã xác nhận',
//         html: `
//             <h2>Cam on ban da su dung Booking Care</h2>
//             <p>Mã OPT của ban: <b>${data.otp}</b> </p>
//         `,
//     });

//     console.log(infor.messageId);
// };
// a().then().catch();

const axios = require('axios');
const querystring = require('querystring');

const API_KEY = 'NTc1Nzc2NjIzMjY1Nzg2ZTcxNzUzMDM5MzU0ZjU1MzE='; // Thay thế bằng API Key của bạn
const SMS_SENDER = 'cong hoa viet name'; // Bạn có thể sử dụng tên của bạn hoặc số điện thoại để làm người gửi
const SMS_RECIPIENT = '0358037491'; // Số điện thoại người nhận (định dạng quốc tế, ví dụ +84123456789)
const SMS_MESSAGE = 'This is a test message from Textlocal'; // Nội dung tin nhắn

const sendSMS = async () => {
    const data = querystring.stringify({
        apikey: API_KEY,
        numbers: SMS_RECIPIENT,
        message: SMS_MESSAGE,
        sender: SMS_SENDER,
    });

    try {
        const response = await axios.post('https://api.txtlocal.com/send/', data);
        console.log('SMS sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};

sendSMS();
