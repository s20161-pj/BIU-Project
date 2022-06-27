import "./Modal.css";

export default function Modal({ closeModal, children }) {
  return (
    <>
      <div className="modal">
        <button className="modal__close-modal" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
      <div className="modal-bg" onClick={closeModal} />
    </>
  );
}
