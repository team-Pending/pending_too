import React from 'react';
import content from '../placeholderData/data.json'
import './account.css'


function Thumbnail() {
    return (
        content.map(content => {
            return (
                <div key={content.index} className="thumbnail">
                    <p>{content.title}</p>
                    <button className='thumb-button'><span className='edit'>Edit</span></button>
                    <img src={content.image} alt={content.title} />
                </div >
            )
        })
    );
}

export default Thumbnail;
