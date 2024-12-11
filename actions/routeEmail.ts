"use server";

import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const transporter = nodemailer.createTransport({

host: process.env.MAIL_HOST,
port: process.env.MAIL_PORT,
secure: true,
// secure: process.env.NODE_ENV !== 'development',
auth: {
    user:process.env.MAIL_USER,
    pass:process.env.MAIL_PASSWORD
},
} as SMTPTransport.Options)

export async function sendMail({
    sendTo,
    subject,
    text,
    html,
  }: {
    sendTo: string | string[];
    subject: string;
    text: string;
    html?: string;
  }) {

    try {
      const isVerified = await transporter.verify();
    } catch (error) {
      console.error('Something Went Wrong', error);
      return;
    }
    const info = await transporter.sendMail({
      from: 'nextapp@o2.pl',
      to: sendTo,
      subject: subject,
      text: text,
      html: html ? html : '',
    });

    return info;
  }