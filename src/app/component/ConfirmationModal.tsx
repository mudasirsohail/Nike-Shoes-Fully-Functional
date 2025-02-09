import type React from "react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  orderId: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, orderId }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Order Confirmed!</h2>
        <p className="mb-4">Thank you for your order. Your order has been successfully placed.</p>
        <p className="mb-4">
          Your order ID is: <span className="font-semibold">{orderId}</span>
        </p>
        <p className="mb-6 text-sm text-gray-600">
          Please save this order ID for future reference. You will also receive a confirmation email shortly.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ConfirmationModal

