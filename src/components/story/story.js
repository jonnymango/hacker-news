import React from 'react';
import {makeURL} from '../../utils/functions';

const renderURL = (url) => {
    const hostname = makeURL(url);

    return <a href={`https://news.ycombinator.com/from?site=${hostname}`}>({hostname})</a>;
}

export const Story = (props) => {
    const {by, title, score, descendants, url, id} = props.story;
    const itemURL = `https://news.ycombinator.com/item?id=${id}`;

    return (
        <div>
            <div>
                <a href={itemURL} target='_blank' rel='noopener noreferrer'>{title}</a>
                <br/>   
                <span>{ url && renderURL(url) }</span>
            </div>
            <div>
                <span>{score}</span> points by {by}. 
            </div>
            <div>
                {descendants} comments
            </div>
        </div>
    );
}