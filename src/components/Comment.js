import React from 'react';
import Box from './Box';

function Comment(props) {
    
    var items = props.comments.map((item) => {
        return {value: item.comment, id: item.idcomment}
    });

    var title = props.title;

    return (
        <Box title={title}
             subtitle='Comment'
             className={props.className}
             items={items}
             update={props.update}
             save={props.save}
             add={props.add}
             delete={props.delete}
             go={props.go}
             next={props.next} />
    )
}

module.exports = Comment;