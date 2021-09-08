import './style.scss';
import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { ModalContext } from '../../../../services/contexts/login-modal';
import { IoClose } from 'react-icons/io5';
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { RiLockFill } from 'react-icons/ri';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ModalLogin() {
  const { modalIsOpen, closeModal } = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const RouteChange = () => {
    let path = `dashboard`;
    history.push(path);
  }

  function authenticate(): void {
    axios.post('http://localhost:3333/sessions', { email, password })
      .then((res) => {
        document.cookie = `token=${res.data.token}`;
        RouteChange();
      });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      ariaHideApp={false}
      closeTimeoutMS={500}
    >
      <div className="login-modal">
        <IoClose className="login-icon" color="#D9DEE3" size="1.5rem" onClick={() => { closeModal() }} />
        <div className="title-login">
          <h2>Login</h2>
          <p>Login to mannage your house</p>
        </div>
        <div className="login-fields">

          <label htmlFor="login">Email</label>
          <div className="input">
            <div className="input-identify">
              <HiOutlineAtSymbol size="1.6rem" color="#fff" />
            </div>
            <input type="text" name="login" placeholder="email@email.com" onChange={(e) => { setEmail(e.target.value) }} />
          </div>

          <label htmlFor="login">Password</label>
          <div className="input">
            <div className="input-identify">
              <RiLockFill size="1.5rem" color="#fff" />
            </div>
            <input type="password" name="login" placeholder="••••••••••" onChange={(e) => { setPassword(e.target.value) }} />
          </div>

          <button className="login-button" onClick={() => { authenticate() }}>Sign In</button>

          <div className="or">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <button className="register-button">Create your account</button>
          <span className="forget-password">Forget you password?</span>
        </div>
      </div>

    </Modal>
  );
}