import React, { useContext, useEffect, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Modal from 'react-modal'
import { ModalContext } from '../../pages/_app'

const MailChimpForm = ({ closeModal }) => {
  const url = `https://golaiv.us13.list-manage.com/subscribe/post?u=768f81b429682b38a33162aa7&id=3bc3c255a3`
  return (
    <div id="modalElement">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            closeModal={closeModal}
          />
        )}
      />
    </div>
  )
}

const CustomForm = ({ status, message, onValidated, closeModal }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      })
  }

  useEffect(() => {
    if (status === 'success') clearFields()
    if (status === 'success') clearFields()
  }, [status])

  const clearFields = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
  }
  return (
    <form className="p-10 flex flex-col md:p-20" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-10 flex justify-between">
        {status === 'success' ? (
          <h1 className="text-3xl font-bold">Success!</h1>
        ) : (
          <h1 className="text-4xl font-semibold">
            Join our email list <br /> for future updates.
          </h1>
        )}
        <button onClick={closeModal}>X</button>
      </div>
      {status === 'error' && <div className="mb-8 text-error">{message}</div>}
      {status === 'success' && <div className="">{message}</div>}

      {status !== 'success' ? (
        <div className="">
          <div>
            <label className="text-xl">First Name</label>
            <input
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="Jane"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-5">
            <label className="text-xl">Last Name</label>
            <input
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              value={lastName}
              placeholder="Doe"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-5">
            <label className="text-xl">Email</label>
            <input
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="your@email.com"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      ) : null}
      {status === 'success' ? (
        <button
          handleClick={() => setModalOpen(false)}
          label="close"
          size="big"
          customClass="mt-5"
        />
      ) : (
        <button
          className="mt-8 w-full p-4 bg-primary text-white text-xl font-semibold rounded-md hover:cursor-pointer"
          type="submit"
          formvalues={[email, firstName, lastName]}>
          {status === 'sending' ? 'Loading...' : 'Subscribe'}
        </button>
      )}
    </form>
  )
}

const ModalMain = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)

  function openModal() {
    setGetStartedModal(true)
  }

  function closeModal() {
    setGetStartedModal(false)
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={getStartedModal}
        onRequestClose={closeModal}
        className="Modal"
        ariaHideApp={false}
        contentLabel="Get Started Modal">
        <MailChimpForm closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default ModalMain
