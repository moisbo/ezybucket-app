import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import BucketContainer from '../containers/BucketContainer'
import ProgressContainer from '../containers/ProgressContainer';
import CommentContainer from '../containers/CommentContainer';

var Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}/>
            <Route path='bucket/:iduser' header='Bucket' component={BucketContainer}/>
            <Route path='progress/:bucket' header='Progress' component={ProgressContainer}/>
            <Route path='comment/:progress' header='Comment' component={CommentContainer}/>
        </Route>
        
    </Router>
);

module.exports = Routes;