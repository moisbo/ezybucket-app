import React from 'react';
import Bucket from './Bucket';
import Box from './Box';

function Progress(props) {
    var items = props.progress.map((item) => {
        return {value: item.progress}
    })
    return (
        <Box title='Progress' 
             items={items}              
             add={props.add}
             delete={props.delete}
             next={props.next} />
    )
}

module.exports = Progress;