import React, { useState } from 'react';
import Logo from './Logo';
import BookBlock from './BookBlock';

const StudentDashboard = () => {
    const [dashboardSelect, setDashboardSelect] = useState('grey');
    const [viewText, setViewText] = useState('black');
    const [marketplace, setMarketplace] = useState('grey');
    const [help, setHelp] = useState('grey');

    const changeSelectState = (comp) => {
        if (comp==='dashboard') {
            setDashboardSelect('black');
            setViewText('grey');
            setMarketplace('grey');
            setHelp('grey');
        } else if (comp==='viewtextbooks') {
            setDashboardSelect('grey');
            setViewText('black');
            setMarketplace('grey');
            setHelp('grey');
        } else if (comp==='marketplace') {
            setDashboardSelect('grey');
            setViewText('grey');
            setMarketplace('black');
            setHelp('grey');
        } else {
            setDashboardSelect('grey');
            setViewText('grey');
            setMarketplace('grey');
            setHelp('black');
        }
    }
    return (
        <div style={{backgroundColor: '#ededed', display: 'flex'}}>
            <div style={{ width: '20vw', height: '100vh', backgroundColor: 'white', borderLeftWidth: 0, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: '1px', borderStyle: 'solid', borderColor: 'black'}} >
                <Logo width='80%' />
                <div style={{display: 'flex', justifyContent: 'left', fontSize:'2vw', alignItems: 'center', width: '20vw', height: '8%',}}>
                    <button 
                      style={{ display: 'flex', border: 0, color: viewText, backgroundColor: 'white', fontSize: '2vw', paddingLeft: 27.8}}
                      onClick={() => changeSelectState('viewtextbooks')}>My books</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'left', fontSize:'2vw', alignItems: 'center', width: '20vw', height: '8%', }}>
                    <button 
                    style={{ display: 'flex', border: 0, color: marketplace, backgroundColor: 'white', fontSize: '2vw', paddingLeft: 27.8}}
                    onClick={() => changeSelectState('marketplace')}>Marketplace</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'left', fontSize:'2vw', alignItems: 'center', width: '20vw', height: '8%', paddingTop: '30vh'}}>
                    <button 
                      style={{ display: 'flex', border: 0, color: help, backgroundColor: 'white', fontSize: '2vw', paddingLeft: 27.8}}
                      onClick={() => changeSelectState('help')}>Help</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'left', fontSize:'2vw', alignItems: 'center', width: '20vw', height: '8%', }}>
                    <button 
                      style={{ display: 'flex', border: 0, color: 'grey', backgroundColor: 'white', fontSize: '2vw', paddingLeft: 27.8}}>
                          Logout
                    </button>
                </div>
            </div>
            <div style={{ width: '79.8vw', fontFamily: 'cursive'}}>
                <h1 style={{paddingLeft: 20}}>Student Dashboard</h1>
                <hr style={{ width: '100%'}}></hr>
                <div style={{display: 'flex', width: '50vw', height: '50vh', backgroundColor: ''}}>
                    
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
