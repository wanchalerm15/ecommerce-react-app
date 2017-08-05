import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Url } from '../AppRouter';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			cart: 0
		}
	}

	render() {
		return (
			<nav>
				<div className="top-menu">
					<div className="container">
						<div className="row">
							<div className="col-6 offset-2 text-left">
								<ul>
									<li><Link to={ Url.Login }>Login</Link></li>
									<li><Link to={ Url.Register }>Register</Link></li>
									<li><Link to={ Url.Checkout }>Checkout</Link></li>
								</ul>
							</div>
							<div className="col-4 text-right">
								<ul>
									<li><a href=""><i className="fa fa-twitter"></i></a></li>
									<li><a href=""><i className="fa fa-facebook"></i></a></li>
									<li><a href=""><i className="fa fa-globe"></i></a></li>
									<li><a href=""><i className="fa fa-linkedin"></i></a></li>
									<li><a href=""><i className="fa fa-feed"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-menu">
					<div className="container">
						<div className="row">
							<div className="col-2 logo-box">
								<Link to={ Url.Home } className="logo">React Shop</Link>
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
									<li><a href=""><i className="fa fa-shopping-cart"></i> {this.state.cart}</a></li>
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
