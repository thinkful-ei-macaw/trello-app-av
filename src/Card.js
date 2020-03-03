import React from 'react';
import './card.css';



function Card (props){
    const {title, content} = props;
    
    return(
        <section>
            <div className="Card">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </section> 
    );
};

export default Card;