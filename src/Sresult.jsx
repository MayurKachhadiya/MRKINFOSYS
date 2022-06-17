import React from 'react';

const Sresult = (props) =>{
    let im=`https://api.unsplash.com/photos?${props.name}`;
    return(
        <>
            <img src={im} alt='mango'/>
        </>
    );
}
export default Sresult;