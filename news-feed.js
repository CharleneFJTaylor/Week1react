import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.component {
    render () {
        return e('div',
            {class: 'container'},
            e(Post, {}, null),
            e(Post, {}, null),
            e(Post, {}, null),
        );
    }
}