import { axiosInstance } from './axiosInstance';
const ENDPOINT = '/api/v1.0/auth'

export const doLogin = async (data) => {
  const res = await axiosInstance.post(`${ENDPOINT}/login`, data)
  return res
}

export const doRegister = async (data) => {
  try {
    const res = await axiosInstance.post(`${ENDPOINT}/register`, data)
    return { success: res.data.success, message: res.data.message }
  } catch (err) {
    return { message: err.response?.data.message, success: err.response?.data.success }
  }
}

export const doResetPassword = async (data) => {
  try {
    const res = await axiosInstance.post(`${ENDPOINT}/forget-password`, data)
    return { success: res.data.success, message: res.data.message }
  } catch (err) {
    return { message: err.response?.data?.message, success: err.response?.data?.success }
  }
}
