import React from 'react';


function Card (props){
    const {title, content} = props;
    
    return(
        <section>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </section> 
    );
};

export default Card;