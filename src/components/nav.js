import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"

export const NavBar = (props)=>{
    return(
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light p-4">
                <p className="navbar-brand">David Bermúdez</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-l-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link border-right border-dark rounded-corner mx-2"><NavLink className="text-success" exact to="/">About</NavLink></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link border-left border-dark rounded-corner"><NavLink className="text-success" exact to="/C.V">My C.V</NavLink></span>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </>
    )
}