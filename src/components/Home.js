import React from 'react';
import {Link} from 'react-router';
import MainContainer from '../containers/MainContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

injectTapEventPlugin();

const style = {
    marginRight: 20
};

var Home = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render:function () {
        var iduser = 1;
        return (
            <MainContainer>
                <Link to={'bucket/'+ iduser} >
                    <FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
            </MainContainer>
        )
    }
});

module.exports = Home;