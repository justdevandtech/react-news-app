import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <p className='fs-6'>{props.title}</p>
      </Modal.Header>
      <Modal.Body>
        <img className='w-100' src={props.image} alt='' />
      </Modal.Body>
      {/*  <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export const ImageModal = ({ modalOpen, handleClose, image, title }) => {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalOpen}
        onHide={handleClose}
        image={image}
        title={title}
      />
    </>
  );
};
