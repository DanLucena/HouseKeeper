import './style.scss';

export function Menu() {
  return (
    <div className="menu-container">
      <h1><span className="purple">H</span>ouse<span className="purple">K</span>eeper</h1>
      <div className="menu-list">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Informations</li>
        </ul>
      </div>
      <div className="buttons">
        <button className="login">LOGIN</button>
        <button className="sign-up">SIGN UP</button>
      </div>
    </div>
  );
}