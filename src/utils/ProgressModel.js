import {config} from '../config.js';
import 'whatwg-fetch';

function getProgress(bucket) {
    return fetch(config.url +'/progress/' + bucket.idbucket)
}

module.exports.getProgress = getProgress;

function deleteProgress(idprogress) {
    return fetch(config.url + '/progress/delete/' + idprogress)
}

module.exports.deleteProgress = deleteProgress;

function updateProgress(progress) {
    return fetch(config.url + '/progress/update/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progress)
    })
}

module.exports.updateProgress = updateProgress;

function createProgress(progress) {
    return fetch(config.url + '/progress/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progress)
    })
}

module.exports.createProgress = createProgress;