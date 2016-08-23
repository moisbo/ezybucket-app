import React from 'react';
import Bucket from './Bucket';
import Box from './Box';

function Progress(props) {

    var items = props.progresses.map((item) => {
        return {value: item.progress, id: item.idprogress}
    });
    
    var title = props.title;

    return (
        <Box title={title}
             subtitle='Progress'
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

module.exports = Progress;