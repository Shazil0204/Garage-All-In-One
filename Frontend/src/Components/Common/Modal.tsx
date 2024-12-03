interface ModalProp {
  children: React.ReactNode;
  onClickOutside: () => void;
}

const Modal: React.FC<ModalProp> = ({ children, onClickOutside }) => {
  return (
    <div
      onClick={onClickOutside}
      className="w-full min-h-full bg-black/50 flex justify-center items-center fixed top-0 left-0 z-50 "
    >
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full border-2 border-black">
        {children}
      </div>
    </div>
  );
};

export default Modal;
