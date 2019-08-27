import React from 'react';
import {makeURL, getTime} from '../../utils/functions';

const renderURL = (url) => {
    const hostname = makeURL(url);

    return <a href={`https://news.ycombinator.com/from?site=${hostname}`}>({hostname})</a>;
}

export const Story = (props) => {
    const {by, title, score, descendants, url, id, time} = props.story;
    const itemURL = `https://news.ycombinator.com/item?id=${id}`;

    return (
        <section className='story'>
            <div>
                <h2 className='story__title'><a href={itemURL} target='_blank' rel='noopener noreferrer'>{title}</a> <span className='story__title--source'>{ url && renderURL(url) }</span></h2>
            </div>
            <div className='story__info'>
                <strong>{score}</strong> points by <strong>{by}</strong>. <br/>
                <strong>{descendants}</strong> comments <br/>
                <em>{getTime(time * 1000)}</em>
            </div>
            
        </section>
    );
}