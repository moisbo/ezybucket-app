import {config} from '../config.js';
import 'whatwg-fetch';
//TODO: add JSON polyfil

function getBuckets(user) {
    return fetch(config.url + '/buckets/' + user.iduser)
}

module.exports.getBuckets = getBuckets;

function deleteBucket(idbucket) {
    return fetch(config.url + '/bucket/delete/' + idbucket)
}

module.exports.deleteBucket = deleteBucket;

function updateBucket(bucket) {
    return fetch(config.url + '/bucket/update/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bucket)
    })
}

module.exports.updateBucket = updateBucket;

function createBucket(bucket) {
    return fetch(config.url + '/bucket/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bucket)
    })
}

module.exports.createBucket = createBucket;