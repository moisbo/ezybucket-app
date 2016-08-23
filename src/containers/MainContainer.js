import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

function MainContainer (props) {
    return (
        <div className='container'>
                <AppBar
                    title='Bucket List'
                    iconElementLeft={<Link to='/'><IconButton><NavigationClose /></IconButton></Link>}
                />
            <div className='flex-container'>
                {props.children}
            </div>
        </div>
    )
}

module.exports = MainContainer;