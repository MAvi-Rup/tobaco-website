import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light text-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src="https://tobacco.virgo.com.bd/wp-content/uploads/2015/06/virgo-tobacco-logo.png" alt="Logo" width="400" height="100" class="d-inline-block align-text-top" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/aboutus">Our evolved purpose and strategy</Link></li>
                                    <li><Link class="dropdown-item" to="/mission">Our History</Link></li>
                                    <li><Link class="dropdown-item" to="/ourpeople">Profiles & Directors</Link></li>
                                    <li><Link class="dropdown-item" to="/ourpeople">Leadership at BATB</Link></li>
                                    <li><Link class="dropdown-item" to="/ourpeople">Our Brands</Link></li>
                                    <li><Link class="dropdown-item" to="/ourpeople">People and Culture</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Investor Menu
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/investor">Investors</Link></li>
                                    <li><Link class="dropdown-item" to="/company-info">Company Info</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sustainability
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/company-info">Economic Impact</Link></li>
                                    <li><Link class="dropdown-item" to="/social-responsibility">Social Responsibility</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Regulation</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;