import React from 'react';
import Box from './Box';

function Comment(props) {
    var items = props.comments.map((item) => {
        return {value: item.comment}
    })
    return (
        <Box title='Comment'
             items={items}
             add={props.add}
             delete={props.delete}
             next={props.next} />
    )
}

module.exports = Comment;