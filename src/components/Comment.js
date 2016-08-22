import React from 'react';
import Box from './Box';

function Comment(props) {
    
    var items = props.comments.map((item) => {
        return {value: item.comment, id: item.idcomment}
    });
    
    return (
        <Box title='Comment'
             items={items}
             update={props.update}
             save={props.save}
             add={props.add}
             delete={props.delete}
             next={props.next} />
    )
}

module.exports = Comment;