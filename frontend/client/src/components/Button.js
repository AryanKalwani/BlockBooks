import React from 'react';

const Button = (props) => {
    return (
        <div style={{width: '30%', display: 'flex', justifyContent:'center'}}>
            <button style={{ 
                display: 'block', 
                border: 'none', 
                height: '4rem', 
                fontSize: '2em', 
                background:'linear-gradient(to right, #03a5c8, #b7f7ff)', 
                borderRadius: 20, 
                color: 'white',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20
                }} onClick={ () => console.log('click')}>
                {props.name}
            </button>
        </div>
    );
}

export default Button;
