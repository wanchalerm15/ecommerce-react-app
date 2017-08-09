import React, { Component } from 'react';

class BrandFooter extends Component {

   render() {
      return (
         <div className="brand-footer">
            <div className="container">
               <div className="row">
                  <div className="col-3">
                     <img src="/images/ic.png" alt="ic"/>
                  </div>
                  <div className="col-3">
                     <img src="/images/ic1.png" alt="ic1"/>
                  </div>
                  <div className="col-3">
                     <img src="/images/ic2.png" alt="ic2"/>
                  </div>
                  <div className="col-3">
                     <img src="/images/ic3.png" alt="ic3"/>
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default BrandFooter;
