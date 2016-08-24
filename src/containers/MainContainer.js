import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import {fullWhite} from 'material-ui/styles/colors';

function MainContainer (props) {
    return (
        <div className='container'>
                <AppBar
                    title='Bucket List'
                    iconElementLeft={
                    <Link to='/'>
                        <IconButton>
                            <NavigationRefresh color={fullWhite}/>
                        </IconButton>
                    </Link>
                    }
                />
            <div className='flex-container'>
                <div className='row'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

module.exports = MainContainer;