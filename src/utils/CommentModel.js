import {config} from '../config.js';
import 'whatwg-fetch';

function getComment(progress) {
    return fetch(config.url +'/comment/' + progress.idprogress)
}

module.exports.getComment = getComment;
