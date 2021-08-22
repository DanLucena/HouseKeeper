import './style.scss';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useState, useContext } from 'react';
import { ModalContext } from '../../../../services/contexts/login-modal';

export function Menu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContext(ModalContext);

  const handleResize = () => {
    (window.innerWidth > 800) && setIsMenuOpen(false);
  }

  window.addEventListener('resize', handleResize);

  return (
    <div className="menu-container">
      <h1><span className="purple">H</span>ouse<span className="purple">K</span>eeper</h1>
      <div className={isMenuOpen ? "menu-list-mobile animation-in" : "menu-list"} >
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Informations</li>
          {
            isMenuOpen &&
            (<>
              <li>Login</li>
              <button>Get Started</button>
              <div className="social-media">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
            </>)
          }
        </ul>
      </div>
      <div className="buttons">
        <button className="login" onClick={() => { openModal() }}>LOGIN</button>
        <button className="sign-up">SIGN UP</button>
      </div>
      {
        isMenuOpen
          ? <IoClose className="menu" size="2rem" onClick={() => { setIsMenuOpen(false); }} />
          : <HiOutlineMenu className="menu" size="1.8rem" onClick={() => { setIsMenuOpen(true); }} />
      }
    </div>
  );
}