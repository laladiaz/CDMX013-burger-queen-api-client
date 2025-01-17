import './styles/ModalDelete.css'
import deleteImg from "../images/deleteImg.png";
import confirmImg from "../images/check.png"


const ModalDelete = ({ show, deleteHandle, onClose }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="delete-modal" >
            <div className='delete-modal-content'>
                <p className='paragraph-confirmation'> ARE YOU SURE YOU WANT TO DELETE? </p>
                <div className='buttons-delete'>
                    <img src={confirmImg} alt='confirm' className="img-delete-modal" onClick={deleteHandle}></img>
                    <img src={deleteImg} alt='delete' className="img-delete-modal" onClick={onClose}></img>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;