import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//height 136px
class Footer extends React.Component {
  render() {
    return (
        <div className="container-fluid mt-5" id="FOOTER"  >
          <div className="row justify-content-center" style={{ backgroundColor: "#066" }} >
            <div className="py-3">  
              <a href="https://www.linkedin.com/in/austenbaker/" >
                <FontAwesomeIcon icon={['fab', 'linkedin']} size = '4x' color="#022" className="footer-icon"/>
              </a>
              <a href="https://github.com/AustenBaker/" className="mx-5">
                <FontAwesomeIcon icon={['fab', 'github']} size = '4x' color="#022"  className="footer-icon"/>
              </a>
              <a href="mailto:austenbaker225@gmail.com" className="">
                <FontAwesomeIcon icon={['fa', 'envelope']} size = '4x' color="#022"  className="footer-icon"/>
              </a>
            </div>
          </div>
          <div className="row" >
            <p className="col-12 p-2 m-0 text-center text-white" style={{ backgroundColor: "#022" }} >
              © 2020 Copyright: 
              <a href="https://austenbaker.com/" className="text-white ml-2">austenbaker.com</a>
            </p>
          </div>
        </div>
    );
  }
}
export default Footer;