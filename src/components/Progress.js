import React from 'react';
import Bucket from './Bucket';
import Box from './Box';

function Progress(props) {

    var items = props.progresses.map((item) => {
        return {value: item.progress, id: item.idprogress}
    });

    return (
        <Box title='Progress'
             items={items}
             update={props.update}
             save={props.save}
             add={props.add}
             delete={props.delete}
             next={props.next} />
    )
}

module.exports = Progress;