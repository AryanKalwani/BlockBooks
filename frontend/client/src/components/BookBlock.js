import React from 'react';

const BookBlock = (props) => {
    return (
        <div style={{paddingTop: 0, paddingBottom: 10,paddingLeft: 20, display:'flex', alignItems:'center', justifyContent: 'center', paddingRight: 20}}>
            <div style={{width: '70vw',paddingLeft: 5, borderStyle: 'double', borderColor: 'lightgray', height: 'auto', borderRadius: 20, paddingLeft: 30, alignItems:'center'}}>
                <p style={{fontSize: '1.7rem',}}>{props.name}</p> 
            </div>
        </div>
        
    )
}

export default BookBlock;