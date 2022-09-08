import emailjs from '@emailjs/browser'
export default async function handler(req, res) {
  const data = req.body
  console.log('request data', data)
  const templateParams = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    subject: data.subject,
    details: data.details,
  }
  console.log('template params', templateParams)
  try {
    // emailjs
    //   .sendForm(
    //     `${process.env.SERVICE_ID}`,
    //     `${process.env.TEMPLATE_ID}`,
    //     data,
    //     `${process.env.PUBLIC_KEY}`
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       console.log('Email sent')
    //     },
    //     (error) => {
    //       console.log(error.text)
    //       console.log("Couldn't send email")
    //     }
    //   )
    await emailjs
      .send(
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`,
        templateParams,
        `${process.env.PUBLIC_KEY}`
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (err) => {
          console.log('FAILED...', err)
        }
      )
    res.status(200).send({ message: 'success' })
  } catch (err) {
    console.log({ err })
    res.status(500).send({ message: `failed`, err })
  }
}
