import {config} from '../config.js';
import 'whatwg-fetch';

function getComments(comment) {
    return fetch(config.url +'/comment/' + comment.idprogress)
}

module.exports.getComments = getComments;

function deleteComment(idcomment) {
    return fetch(config.url + '/comment/delete/' + idcomment)
}

module.exports.deleteComment = deleteComment;

function updateComment(comment) {
    return fetch(config.url + '/comment/update/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}

module.exports.updateComment = updateComment;

function createComment(comment) {
    return fetch(config.url + '/comment/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}

module.exports.createComment = createComment;