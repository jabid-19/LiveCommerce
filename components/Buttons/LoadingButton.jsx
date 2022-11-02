import { BiLoaderAlt } from 'react-icons/bi'

const LoadingButton = ({ value, loading, ...rest }) => {
  return (
    <button {...rest}>
      {loading ? (
        <p className="flex items-center justify-center w-full">
          <BiLoaderAlt className="animate-spin mr-2 text-xl" /> Loading...
        </p>
      ) : (
        value
      )}
    </button>
  )
}

export default LoadingButton
