export default async function handler(req, res) {
  try {
    res.status(200).send({
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      PUBLIC_KEY: process.env.PUBLIC_KEY,
    })
  } catch (err) {
    console.log({ err })
    res.status(500).send({ message: `failed`, err })
  }
}
