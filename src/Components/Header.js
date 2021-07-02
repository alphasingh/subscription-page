import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <section className="navbar-dark bg-dark header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <nav className="navbar navbar-expand-lg ">
                            <Link to="/" className="navbar-brand text-white">Tiffin Umbrella</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                        <Link to="/" className="nav-link">About<span
                                            className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Tiffin Providers<span
                                            className="sr-only">(current)</span></Link>
                                    </li>
                                    <br></br>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Gallery<span
                                            className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/buyerinfo" className="nav-link">Buyer<span
                                            className="sr-only">(current)</span></Link>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
