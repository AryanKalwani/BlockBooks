import React from 'react';

const Marketplace = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <p style={{paddingLeft: 20, fontSize: '2rem'}}>Marketplace</p>
            </div>
            <div style={{ paddingLeft: 20}}>
                <input style={{paddingLeft: '3rem',fontsize: '2rem', width: '20vw', height: '7vh', borderRadius: 30, width: '20vw'}} placeholder='Search For Books'/>
            </div>
        </div>
    );
}

export default Marketplace;