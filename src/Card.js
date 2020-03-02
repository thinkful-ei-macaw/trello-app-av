import React from 'react';


function Card (props){
    const currentTitle = props.title;
    const currentContent = props.content;
    return(
        <section>
            <div>
                <h3>{currentTitle}</h3>
                <p>{currentContent}</p>
            </div>
        </section> 
    );
};

export default Card;