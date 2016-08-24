import {config} from '../config.js';
import 'whatwg-fetch';
//TODO: polyfill: JSON, FileReader, BLOB, Promise

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

function uploadImage(comment) {
    return readFile(comment.picture)
        .then((e) => {
            comment.picture = e.currentTarget.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
            return fetch(config.url + '/comment/image/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

module.exports.uploadImage = uploadImage;

function getImage(comment) {
    return fetch(config.url + '/comment/image/' + comment.id);
}

module.exports.getImage = getImage;

function readFile(file){
    return new Promise((resolve, reject) => {
        var fr = new FileReader(); //TODO: Add polyfill
        fr.onload = resolve;
        fr.readAsDataURL(file);
        fr.onerror = reject;
    });
}