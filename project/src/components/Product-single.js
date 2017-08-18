import React, { Component } from 'react';
import Banner from './Banner';
import Sidebar from './Sidebar';

class ProductSingle extends Component {

   constructor() {
      super();
      this.state = {
         count: 0
      };

      // this.onUpdateCount = this.onUpdateCount.bind(this);
   }

   onUpdateCount(type) {
      let count = this.state.count;
      if(type === '+') {
         this.setState({ count: count + 1 });
      }
      else if(type === '-' && count > 0) {
         this.setState({ count: count - 1 });
      }
   }

   render() {
      return (
         <div className="product-single">
            <Banner link="Single" />
            <div className="container wraper">
               <div className="row">
                  <div className="col-9">
                     <div className="row">
                        <div className="col-5 boxs">
                           <div className="images">
                              <div className="img-active">
                                 <img src="images/si.jpg" alt="si"/>
                              </div>
                              <div className="img-row">
                                 <div className="img-list">
                                    <img src="images/si.jpg" alt="si"/>
                                 </div>
                                 <div className="img-list">
                                    <img src="images/si1.jpg" alt="si1"/>
                                 </div>
                                 <div className="img-list">
                                    <img src="images/si2.jpg" alt="si2"/>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-7 boxs">
                           <div className="product-single-detail">

                              <div className="form-group price">
                                 <h3>NAM LIBER TEMPOR CUM</h3>
                                 <p className="line-detail">There are many variations of passages of Lorem Ipsum.</p>
                                 <div className="row">
                                    <div className="col sale-price">$140.00</div>
                                    <div className="col saleout-price"><em>$160.00</em></div>
                                 </div>
                              </div>

                              <div className="form-group">
                                 <h4>QUICK OVERVIEW:</h4>
                                 <p>
                                    Nam liber tempor cum soluta nobis eleifend option congue
                                    nihil imperdiet doming id quod mazim placerat facer possim assum.
                                    Typi non habent claritatem insitam; es
                                 </p>
                              </div>

                              <div className="form-group">
                                 <div className="wish-list">
                                    <ul>
                                       <li className="wish">
                                          <a href="">
                                             <i className="fa fa-check-square-o"></i> Add to Wishlist
                                          </a>
                                       </li>
                                       <li className="compare">
                                          <a href="">
                                             <i className="fa fa-share-alt-square"></i> Shared it
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>

                              <div className="form-group quantity">
                                 <div className="row">
                                    <div className="col text-left">
                                       <div className="select">
                                          <div className="entry value-minus" onClick={ () => this.onUpdateCount('-') }>
                                             <span className="fa fa-minus"></span>
                                          </div>
                                          <div className="entry value">
                                             <span>{ this.state.count }</span>
                                          </div>
                                          <div className="entry value-plus" onClick={ () => this.onUpdateCount('+') }>
                                             <span className="fa fa-plus"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col text-right">
                                       <a href="" className="btn btn-pink">Add to cart</a>
                                    </div>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>

                     <div className="row description">
                        <div className="col-4">
                           <ul className="box-border list-menu">
                              <li><a href="" className="active">Product Description</a></li>
                              <li><a href="">Additional Information</a></li>
                              <li><a href="">Reviews</a></li>
                           </ul>
                        </div>
                        <div className="col-8">
                           <div className="box-border">
                              <p>
                                 There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form,
                                 by injected humour, or randomised words which don't look even slightly believable.
                                 If you are going to use a passage of Lorem Ipsum,
                                 you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                 making this the first true generator on the Internet.
                                 It uses a dictionary of over 200 Latin words, combined
                              </p>
                              <ul className="list-description">
											<li><i className="fa fa-check"></i> Research</li>
											<li><i className="fa fa-check"></i> Design and Development</li>
											<li><i className="fa fa-check"></i> Porting and Optimization</li>
											<li><i className="fa fa-check"></i> System integration</li>
											<li><i className="fa fa-check"></i> Verification, Validation and Testing</li>
											<li><i className="fa fa-check"></i> Maintenance and Support</li>
										</ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-3">
                     <Sidebar />
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default ProductSingle;
