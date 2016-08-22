import React from 'react';
import MainContainer from './MainContainer';
import Bucket from '../components/Bucket';
import Progress from '../components/Progress';
import Comment from '../components/Comment';
import model from '../utils/CommentModel';

var CommentContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps:function () {
        return {
            idProgress:1
        }
    },
    getInitialState: function() {
        return {
            buckets: [],
            progress: [],
            comments: []
        }
    },
    componentDidMount: function () {
        model.getComment({idprogress: 1})
            .then((response)=>{
                return response.json()
            })
            .then(function(response){
                this.setState({
                    buckets: this.props.location.state.buckets,
                    progress: this.props.location.state.progress,
                    comments: response
                })
            }.bind(this))
    },
    next: function (e) {
        e.preventDefault();
        console.log('show pop up comment')
    },
    add: function (idprogress) {
        console.log('add '+idprogress)
    },
    delete: function (idcomment) {
        console.log('delete '+idcomment)
    },
    render: function () {
        return (
            <MainContainer>
                <Bucket buckets={this.state.buckets} />
                <Progress progress={this.state.progress} />
                <Comment comments={this.state.comments}
                         add={this.add}
                         delete={this.delete}
                         next={this.next} />
            </MainContainer>
        )
    }
});

module.exports = CommentContainer;