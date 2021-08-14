import React from 'react';
import '../Styles/header.css';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { GoogleLogin } from 'react-google-login';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '3px',
        border: 'black solid 2px',
        backgroundColor: 'brown',
        height: '500px'
     
      },
  };


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            loginModalIsOpen: false,
            isUserLoggedIn: false,
            userName: undefined
        }
    }


    Navigate = () => {
        this.props.history.push("/");
    }

    handleLogin = () => {
        this.setState({ loginModalIsOpen : true });
    }

    responseGoogle = (response) => {
        this.setState({ loginModalIsOpen: false, isUserLoggedIn: true, userName: response.profileObj.name});
    }

    handleLogout = () => {
        this.setState({ isUserLoggedIn: false, userName: undefined })
    }


    render() {
        const { loginModalIsOpen, isUserLoggedIn, userName } = this.state;
        return (
            <div style= {{ backgroundColor: '#ce0505', height: '60px' }}>
                <div class="header-logo" onClick={this.Navigate}>
                    <b>e!</b>
                </div>
                {isUserLoggedIn ?  <div style={{ float: 'right', marginTop: '10px' }}>
                    <div style ={{ display:'inline-block'}} className="header-login" onClick={this.handleLogin} >{userName}</div>
                    <div style ={{ display:'inline-block'}} className="header-account" onClick={this.handleLogout}>Logout</div>
                </div> :
                <div style={{ float: 'right', marginTop: '10px' }}>
                    <div style ={{ display:'inline-block'}} className="header-login" onClick={this.handleLogin} >Login</div>
                    <div style ={{ display:'inline-block'}} className="header-account">Create an account</div>
                </div>}

                <Modal
                    isOpen={loginModalIsOpen}
                    style={customStyles}
                >
                    <div>
                    <GoogleLogin
                         clientId="712365721815-1l6gg08cq8vhbhc7n284lbb5mshov17r.apps.googleusercontent.com"
                         buttonText="Login with Gmail"
                         onSuccess={this.responseGoogle}
                         onFailure={this.responseGoogle}
                         cookiePolicy={'single_host_origin'}
                    />

                    
                    </div>
                    
                </Modal>

            </div>
        )
    }
}

export default withRouter(Header);