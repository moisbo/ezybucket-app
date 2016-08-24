import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TextField from 'material-ui/TextField';

import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionInput from 'material-ui/svg-icons/action/input';
import ActionGo from 'material-ui/svg-icons/navigation/arrow-back';
import {red500} from 'material-ui/styles/colors';

const addButton = {
    margin: 20
};

var Box = React.createClass({
    getDefaultProps: function () {
      return {
          className:'box',
          title:'',
          add: () => {},
          update: () => {},
          delete: () => {},
          go: () => {},
          next: () => {},
          save: () => {}
      }
    },
    render: function () {
        return (
            <Card className={this.props.className} style={this.props.style} >
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subtitle} >
                </CardHeader>
                <div className='box-back'>
                    <IconButton
                        onClick={this.props.go} >
                        <ActionGo color={red500} />
                    </IconButton>
                </div>
                <CardActions>
                    {this.props.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <IconButton onClick={this.props.delete.bind(null, item.id, index)}>
                                    <ActionDelete />
                                </IconButton>
                                <TextField hintText={this.props.hintText}
                                           type='text'
                                           id={'' + item.id}
                                           defaultValue={item.value}
                                           name={'' + index}
                                           onChange={this.props.update}
                                           onBlur={this.props.save} />
                                <IconButton onClick={this.props.next.bind(null, item)}>
                                    <ActionInput />
                                </IconButton>
                            </div> 
                        )
                    })}
                </CardActions>
                <div className='box-add'>
                    <FloatingActionButton
                        onClick={this.props.add}
                        style={addButton}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </Card>
        )
    },
    propTypes: {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired,
        add: React.PropTypes.func.isRequired,
        delete: React.PropTypes.func.isRequired,
        update: React.PropTypes.func.isRequired,
        save: React.PropTypes.func.isRequired,
        go: React.PropTypes.func.isRequired,
        next: React.PropTypes.func.isRequired
    }
});

module.exports = Box;
