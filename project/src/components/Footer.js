import React, { Component } from 'react';

class Footer extends Component {

   render() {
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <div className="col">
                     <h6 className="logo">
                        React shop
                     </h6>
                     <p className="detail">
                        Suspendisse sed accumsan risus.
                        Curabitur rhoncus, elit vel tincidunt elementum,
                        nunc urna tristique nisi,
                        in interdum libero magna tristique ante.
                        adipiscing varius.
                        Vestibulum dolor lorem.
                     </p>
                  </div>
                  <div className="col">
                     <h6>INFORMATION</h6>
                     <ul>
   							<li><a href="404.html">About</a></li>
   							<li><a href="contact.html">Contact Us</a></li>
   							<li><a href="#">Returns</a></li>
   							<li><a href="contact.html">Site Map</a></li>
                        <li><a href="#">Order History</a></li>
   							<li><a href="wishlist.html">Wish List</a></li>
   							<li><a href="login.html">Login</a></li>
   						</ul>
                  </div>
                  <div className="col">
                     <h6>TAGS</h6>
                     <ul className="tags">
   							<li><a href="#">Lorem</a></li>
   							<li><a href="#">Sed</a></li>
   							<li><a href="#">Ipsum</a></li>
   							<li><a href="#">Contrary</a></li>
   							<li><a href="#">Chunk</a></li>
   							<li><a href="#">Amet</a></li>
   							<li><a href="#">Omnis</a></li>
   						</ul>
                  </div>
                  <div className="col">
                     <h6>NEWSLETTER</h6>
                     <div className="letter">
                        <form action="">
                           <label htmlFor="">Sign up for News Letter</label>
                           <input type="text" className="form-control" placeholder="Enter your E-mail" />
                           <button type="submit" className="btn btn-block btn-pink">
                              Subscribe
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }

}

export default Footer;
