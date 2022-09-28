import axios from 'axios';

export default async function handler(req, res) {
  const { email, firstName, lastName } = req.body

  const url = process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY
  try {
    const response = await axios.post(`${url}&EMAIL=${email}&MERGE1=${firstName}&MERGE2=${lastName}`)
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`
      })
    }
    return res.status(201).json({ result: response?.data?.result, message: response?.data?.msg })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}