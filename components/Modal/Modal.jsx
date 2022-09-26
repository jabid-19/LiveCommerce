import React, { useEffect, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',

    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const MailChimpForm = () => {
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
          />
        )}
      />
    </div>
  )
}

const CustomForm = ({ status, message, onValidated }) => {
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
    <form className="p-0 flex flex-col md:p-20" onSubmit={(e) => handleSubmit(e)}>
      <div className="text-4xl font-semibold mb-10">
        {status === 'success' ? (
          'Success!'
        ) : (
          <h1>
            Join our email list <br /> for future updates.
          </h1>
        )}
      </div>
      {status === 'error' && <div>{message}</div>}
      {status === 'success' && <div>{message}</div>}

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
  const [modalIsOpen, setIsOpen] = useState(true)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Get Started Modal">
        <MailChimpForm />
      </Modal>
    </div>
  )
}

export default ModalMain
