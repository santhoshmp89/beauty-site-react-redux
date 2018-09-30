import React from 'react';

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Beauty Site</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                
                <button type="button" className="btn btn-secondary" onClick={props.handleForm}>
                    Add User
                </button>
                    &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-primary">
                    Cart Items <span class="badge badge-light">{props.cartList.length}</span>
                </button>           
            </div>
        </nav>
    )
}

export default NavBar;