import {config} from '../config.js';
import 'whatwg-fetch';

function getProgress(bucket) {
    return fetch(config.url +'/progress/' + bucket.idbucket)
}

module.exports.getProgress = getProgress;
