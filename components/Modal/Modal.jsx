import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import capitalizeFirstLetter from '../../helper/capitalize'
import { ModalContext } from '../../pages/_app'
import PrimaryButton from '../Shared/PrimaryButton'

const GerStartedForm = ({ closeModal }) => {
  const [status, setStatus] = useState({
    message: null,
    result: null,
    status: null,
    loading: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { email, firstName, lastName } = data
    setStatus({ ...status, loading: true })
    axios
      .post('/api/getstarted', {
        email,
        firstName,
        lastName,
      })
      .then((response) =>
        setStatus({
          message: response?.data?.message,
          result: response?.data?.result,
          status: response?.status,
          loading: false,
        })
      )
  }
  return (
    <div className="p-10 flex flex-col md:p-20">
      {status.status && status.result && status.message && (
        <div>
          <h1
            className={`text-3xl font-bold ${
              status.result === 'error' ? 'text-error' : 'text-secondary'
            }`}>
            {capitalizeFirstLetter(status.result)}
          </h1>
          <p className="mt-5 text-xl">{status.message}</p>
        </div>
      )}
      {status.status !== (201 || 200) && (
        <div>
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold">Join our Early Bird Campaign</h1>
            <button onClick={closeModal}>
              <AiOutlineClose />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <label htmlFor="email" className="inline-flex mb-2 text-xl">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Ex. example@example.com"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              {errors.email && <p className="text-error">{errors.email.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="firstName" className="inline-flex mb-2 text-xl">
                First Name
              </label>
              <input
                type="text"
                {...register('firstName', { required: 'First Name is required' })}
                placeholder="Ex. John"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              {errors.email && <p className="text-error">{errors.firstName?.message}</p>}
            </div>
            <div className="mb-5">
              <label htmlFor="lastName" className="inline-flex mb-2 text-xl">
                Last Name
              </label>
              <input
                type="text"
                {...register('lastName', { required: 'Last Name is required' })}
                placeholder="Ex. Doe"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              {errors.email && <p className="text-error">{errors.lastName?.message}</p>}
            </div>
            <div className="mt-8">
              <PrimaryButton
                textClass="text-white"
                bgClass="bg-primary"
                borderClass="border-primary"
                hoverText="hover:text-white"
                hoverBg="hover:bg-accent"
                hoverBorder="hover:border-accent"
                horizontalPadding="w-full"
                type="submit">
                {status.loading ? 'Loading...' : 'Get started'}
              </PrimaryButton>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

const ModalMain = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)

  function closeModal() {
    setGetStartedModal(false)
  }
  return (
    <div>
      <Modal
        isOpen={getStartedModal}
        onRequestClose={closeModal}
        className="Modal"
        ariaHideApp={false}
        contentLabel="Get Started Modal">
        <GerStartedForm closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default ModalMain
