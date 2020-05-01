import React from 'react';
// import {Link} from 'react-router-dom';
import img from './images/safe.jpg';

function Footer () {
    return(
      
        <footer class="page-footer" style={{ marginTop: "60px"}}>
        <div class="container">
          <div class="row">
            <div class=" col-sm-8 center">
            <img src={img} alt="" height="90" width="90"/>
            </div>
            <div className="col-sm-4" style={{marginLeft: "-320px"}}>
              <h5 class="black-text ">Stay Home Stay Safe</h5>
              <p class="black-text text-lighten-4">PLEASE DON'T GO OUTSIDE STAY AT HOME</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright center">
          <div class="container">
          © 2020 Copyright Amit kumar     contact @ 8435518677
          {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
        </footer>
    )

}
export default Footer;

