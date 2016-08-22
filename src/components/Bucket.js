import React from 'react';
import Box from './Box';

function Bucket(props){
    
    var items = props.buckets.map((item) => {
        return {value: item.bucket, id: item.idbucket}
    });
    
    return (
        <Box title='Bucket'
             items={items}
             update={props.update}
             save={props.save}
             add={props.add}
             delete={props.delete}
             next={props.next}
             idProgress={props.idProgress}
        />
    )
}

Bucket.propTypes = {
    //onChange: React.PropTypes.func.isRequired
};

module.exports = Bucket;