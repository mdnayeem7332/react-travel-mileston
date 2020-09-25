import React from 'react';
import logo from '../../images/logo-white.png';
import './Header.css';



const Header = () => {
    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
                <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navberTgl" aria-controls="navberTgl" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>

                <div class="collapse navbar-collapse" id="navberTgl">

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search your Destination" id="search" />
                        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">News <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a href="/login" class="btn btn-warning" role="button">Login</a>
                        </li>
                    </ul>

                </div>
            </nav >
        </header >
    );
};

export default Header;