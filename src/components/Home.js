import React from 'react';
import {Link} from 'react-router';
import MainContainer from '../containers/MainContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/arrow-forward';
import {Card, CardActions, CardHeader} from 'material-ui/Card';

injectTapEventPlugin();

const style = {
    margin: 20
};

var Home = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render:function () {
        var iduser = 1;
        return (
            <MainContainer>
                <Card className='box'>
                    <CardHeader
                        title='Welcome to a demo app for EzyCollect, please proceed to create your bucket list'>
                    </CardHeader>
                    <CardActions>
                    <Link to={'bucket/'+ iduser} >
                        <FloatingActionButton 
                            style={style}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </Link>
                    </CardActions>
                </Card>
            </MainContainer>
        )
    }
});

module.exports = Home;