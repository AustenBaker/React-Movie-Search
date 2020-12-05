import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <footer id="FOOTER">
        <div className="container-fluid mt-5" >
          <div className="row justify-content-center text-center" style={{ backgroundColor: "#c7c7c7" }} >
            <div className="mt-1">
              <h5 className="mb-1">Made by Austen Baker</h5>
              <ul className="list-unstyled m-0">
                <li>
                <a className="text-dark" href="https://austenbaker.com/"> austenbaker.com</a>          
                </li>
                <li>
                  <div className="text-dark text-center p-0 m-0">(507)-993-2981</div>          
                </li>
                <li>
                  <div className="text-dark text-center p-0 m-0">austenbaker225@gmail.com</div>    
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/austenbaker/" className="px-2">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size = '3x' color="#0077B5" className="footer-icon"/>
                  </a>
                  <a href="https://github.com/AustenBaker/" className="px-2 footer-icon">
                    <FontAwesomeIcon icon={['fab', 'github']} size = '3x' color="#6e5494" className="footer-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row bg-secondary" >
            <div className="col-12 py-3 text-center" style={{ backgroundColor: "#a7a7a7" }} >
              © 2020 Copyright:
              <a href="https://austenbaker.com/"> austenbaker.com</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;