import React, { useState } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Button from './Button';

const Intro = () => {
    return (
        <div>
            <Logo width='15%' />
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', }}>
                <p style={{
                    color: 'grey',
                    fontSize: '2em',
                    height: 'auto',
                    width: '60%',
                    padding: 10,
                    borderStyle: 'solid',
                    borderColor: '#cdcdcd',
                    borderRadius: 60    
                }}>
                    Business Description 
                </p>
            </div>  
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', }}>
                <p style={{ color: 'grey', fontSize: '3em',  paddingTop: 0, margin: 0, marginBottom: 50}}>
                    I am a ...
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <Button name="Student" />
                <Button name="Publisher" />
            </div>
        </div>
    );
}

export default Intro;