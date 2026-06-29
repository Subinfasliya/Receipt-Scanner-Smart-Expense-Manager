import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEscapeKey(isOpen, onClose);
  useLockBodyScroll(isOpen);
  
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div
          className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="text-lg font-semibold">{title}</h2>

            <button
              onClick={onClose}
              className="text-2xl text-gray-500 hover:text-red-500"
            >
              x
            </button>
          </div>

          {/* Body */}
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Modal;
