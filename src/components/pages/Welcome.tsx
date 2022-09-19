import './Welcome.css';

const Welcome = (props: any) => {
  const { isShow, handleClick } = props;

  return (
    <div className={`card border-0 shadow card--welcome ${isShow === 'welcome' ? 'is-show' : ''} `} id="welcome">
      <div className="card-body">
        <h2 className="card-title">WELCOME</h2>
        <p>Welcome to the login page</p>
        <div className="btn-wrap">
          <button className="btn btn-lg btn-register js-btn" onClick={(e) => handleClick(e)} data-target="register">
            REGISTER
          </button>
          <button className="btn btn-lg btn-login js-btn" onClick={(e) => handleClick(e)} data-target="login">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
