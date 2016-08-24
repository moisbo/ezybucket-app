import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import deepOrange500 from 'material-ui/styles/colors';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup
                    transitionName='appear'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                        >
                    <MuiThemeProvider muiTheme={muiTheme}>
                        {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
                    </MuiThemeProvider>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;