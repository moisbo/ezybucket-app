import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
    maxWidth: 'none'
};

const image = {
    textAlign: 'center'
};

const imageInput = {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
};

const buttons = {
    padding: 20
};

function UploadPicture(props) {

    const actions = [
        <FlatButton
            label='Close'
            primary={true}
            onTouchTap={props.close}
        />
    ];

    //TODO: change the image type and loading...

    return (
        <Dialog
            title={props.comment.value}
            actions={actions}
            modal={true}
            contentStyle={customContentStyle}
            autoScrollBodyContent={true}
            open={props.open}
        >
            <div>
                { !props.comment.picture
                    ? '' :
                    <img style={image} src={'data:image/jpg;base64,' + props.comment.picture}/> }
            </div>
            <div style={buttons}>
                <RaisedButton
                    label='Choose an image'
                    labelPosition='before'
                >
                    <input
                        type='file'
                        style={imageInput}
                        id={'' + props.comment.id}
                        data-name={props.comment.value}
                        onChange={props.submit}
                    />
                </RaisedButton>
                {!props.comment.picture ? '' :
                <RaisedButton
                    label='Delete'
                    labelPosition='before'
                >
                    <input
                        type='button'
                        style={imageInput}
                        id={'' + props.comment.id}
                        data-name={props.comment.value}
                        onClick={props.deleteImage}
                    />
                </RaisedButton>}
            </div>
        </Dialog>
    )
}

module.exports = UploadPicture;