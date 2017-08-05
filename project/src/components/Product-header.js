import React, { Component } from 'react';

class ProductHeader extends Component {
  render() {
    return (
      <div className="product-header">
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <div className="boxset alpha-hover">
                     <img src="/images/pi.jpg" alt="Luxurious"/>
                     <div className="pic-detail">
								<p>Lorem Ipsum</p>
								<label></label>
								<h5>For Men</h5>
							</div>
                  </div>

                  <div className="detail">
                     <span>Hot Deal</span>
                     <h2><a href="single.html">Luxurious &amp; Trendy</a></h2>
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</p>
                     <a href="single.html" className="buy-now">Buy Now</a>
                  </div>
               </div>
               <div className="col-6">
                  <div className="boxset alpha">
                     <img src="/images/pi1.jpg" alt="pi1"/>
                     <div className="pic-detail">
   							<p>Lorem Ipsum</p>
   							<label></label>
   							<h5>For Men</h5>
							</div>
                  </div>

                  <div className="boxset alpha">
                     <img src="/images/pi2.jpg" alt="pi1"/>
                     <div className="pic-detail">
								<p>Lorem Ipsum</p>
								<label></label>
								<h5>For Kids</h5>
							</div>
                  </div>

                  <div className="boxset alpha">
                     <img src="/images/pi3.jpg" alt="pi1"/>
                     <div className="pic-detail">
								<p>Lorem Ipsum</p>
								<label></label>
								<h5>For Women</h5>
							</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}

export default ProductHeader;
