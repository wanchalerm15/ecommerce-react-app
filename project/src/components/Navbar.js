import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className="top-menu">
					<div className="container">
						<div className="row">
							<div className="col-6 offset-2 text-left">
								<ul>
									<li><a href="login.html">Login</a></li>
									<li><a href="register.html">Register</a></li>
									<li><a href="checkout.html">Checkout</a></li>
								</ul>
							</div>
							<div className="col-4 text-right">
								<ul>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-globe"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-feed"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-menu">
					<div className="container">
						<div className="row">
							<div className="col-2">
								<a href="" className="logo">React Shop</a>
							</div>
							<div className="col-8 text-left">
								<ul>
									<li><a href="">Home</a></li>
									<li><a href="">Women</a></li>
									<li><a href="">Man</a></li>
									<li><a href="">Sale</a></li>
									<li><a href="">About</a></li>
									<li><a href="">Short Codes</a></li>
									<li><a href="">Contact</a></li>
								</ul>
							</div>
							<div className="col-2 text-right">
								<ul>
									<li><a href=""><i className="fa fa-search"></i></a></li>
									<li><a href=""><i className="fa fa-shopping-cart"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
