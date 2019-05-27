import React from 'react';
import { Link } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <h1>Dashbord</h1>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}

export default Dashbord;