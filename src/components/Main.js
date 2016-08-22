import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import deepOrange500 from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
            </MuiThemeProvider>
        )
    }
});

module.exports = Main;