import React from 'react';
import logo from '../Book-01.jpg';

const Logo = (props) => {
    return (
        <div style={{display: 'block', justifyContent:'left', paddingTop: 15, paddingLeft: 15, paddingBottom: 40}}>
            <img src={logo} alt='logo' width={props.width}/>
        </div>
    );
}

export default Logo;