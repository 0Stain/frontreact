import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CourCard = (props) => {
    const  cour  = props.cour;

    return(
        
        <div className="card text-white bg-dark mb-3">
            <img src="https://fpcssmi.weebly.com/uploads/1/2/8/2/12826273/7262530_orig.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-cour/${cour._id}`}>
                        { cour.titre }
                    </Link>
                </h2>
                <h3>{cour.published_date}</h3>
                <p>{cour.desc}</p>
            </div>
        </div>
        
    )
};

export default CourCard;