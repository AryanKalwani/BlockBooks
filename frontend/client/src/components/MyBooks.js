import React from 'react';
import BookBlock from './BookBlock';

const MyBooks = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{paddingLeft: 0, fontSize: '2rem'}}>My Textbooks</p>
                </div>
                <div style={{height: '60vh',overflowY: 'scroll'}}>
                    <BookBlock name='Textbook A'/>
                    <BookBlock name='Textbook B'/>
                    <BookBlock name='Textbook C'/>
                    <BookBlock name='Textbook A'/>
                    <BookBlock name='Textbook B'/>
                    <BookBlock name='Textbook C'/>
                    <BookBlock name='Textbook A'/>
                    <BookBlock name='Textbook B'/>
                    <BookBlock name='Textbook C'/>
                </div>             
        </div>
    );
}

export default MyBooks;