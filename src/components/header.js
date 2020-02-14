import React, {Component} from "react";
import Logo from '../assets/images/logo.png';
import '../assets/styles/main.scss';

class Header extends Component{
    render() {
        return(
            <header>
                <div className="main-container">
                    <div className="site-logo">
                        <img src={Logo} alt="logo"/>
                        <span>Weather SPA</span>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;