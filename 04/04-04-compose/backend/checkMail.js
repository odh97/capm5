import nodemailer from 'nodemailer';

export function checkEmail(email) {
  if (email.includes('@') && email.includes('.')) {
    return true;
  } else {
    console.log('이메일 형식이 아닙니다.');
    return false;
  }
}

export function getWelcomeMailTemplate(name) {
  return `
    <html>
      <body>
        <h1>환영합니다! ${name}님</h1>
        <p>회원 가입을 축하합니다.</p>
      </body>
    </html>
  `;
}

export async function sendTemplateMail(myEmail, template) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test@gmail.com',
      pass: 'test', // gmail 앱 비밀번호를 만들어서 적용 해봤음.
    },
  });

  const mailResult = await transporter.sendMail({
    from: 'test@gmail.com',
    to: myEmail,
    subject: '가입을 환영합니다!',
    html: template,
  });

  console.log(mailResult);
}
