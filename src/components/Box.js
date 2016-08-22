import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TextField from 'material-ui/TextField';

import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionInput from 'material-ui/svg-icons/action/input';

const style = {
    marginRight: 20
};

var Box = React.createClass({
    getDefaultProps: function () {
      return {
          add: () => {},
          delete: () => {},
          update: () => {},
          next: () => {},
          save: () => {}
      }
    },
    render: function () {
        return (
            <Card className='box'>
                <CardHeader
                    title={this.props.title}
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions>
                    {this.props.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <IconButton onClick={this.props.delete.bind(null, item.id)}>
                                    <ActionDelete />
                                </IconButton>
                                <TextField hintText={this.props.hintText}
                                           type='text'
                                           id={'' + item.id}
                                           defaultValue={item.value}
                                           name={'' + index}
                                           onChange={this.props.update}
                                           onBlur={this.props.save} />
                                <IconButton onClick={this.props.next}>
                                    <ActionInput />
                                </IconButton>
                            </div>
                        )
                    })}
                </CardActions>
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <FloatingActionButton
                    onClick={this.props.add}
                    style={style}>
                    <ContentAdd />
                </FloatingActionButton>
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
        next: React.PropTypes.func.isRequired
    }
});

module.exports = Box;