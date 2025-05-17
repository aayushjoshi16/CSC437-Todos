interface ModalProps {
  headerLabel: string;
  isOpen: boolean;
  onCloseRequested: () => void;
  children: React.ReactNode;
}

function Modal({ headerLabel, isOpen, onCloseRequested, children }: ModalProps) {
  // If modal is closed, render nothing
  if (!isOpen) {
    return null;
  }

  // Handle clicks on the overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Only close if the click was directly on the overlay element
    if (e.target === e.currentTarget) {
      onCloseRequested();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-4 rounded w-80 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-medium">{headerLabel}</h2>
          <button
            onClick={onCloseRequested}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
