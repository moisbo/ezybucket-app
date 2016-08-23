import React from 'react';
import MainContainer from './MainContainer';
import Bucket from '../components/Bucket';
import Progress from '../components/Progress';
import Comment from '../components/Comment';
import model from '../utils/CommentModel';

function getComments () {
    model.getComments({idprogress: this.props.routeParams.idprogress})
        .then((response)=>{
            return response.json()
        })
        .then(function(response){
            this.setState({
                idbucket: this.props.location.state.idbucket,
                iduser: this.props.location.state.iduser,
                idprogress: this.props.routeParams.idprogress,
                buckets: this.props.location.state.buckets,
                progresses: this.props.location.state.progresses,
                comments: response
            })
        }.bind(this))
}

var CommentContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            buckets: [],
            progresses: [],
            comments: []
        }
    },
    componentDidMount: function () {
        getComments.bind(this)();
    },
    go: function () {
        this.context.router.push({
            pathname: '/progress/' + this.state.idbucket,
            state:{
                iduser: this.state.iduser,
                buckets: this.state.buckets,
                progresses: this.state.progresses
            }
        });
    },
    next: function (comment) {
        console.log('show pop up comment' + comment.id +' '+ comment.value)
    },
    add: function () {
        //console.log('add bucket iduser: '+ this.state.iduser)
        model.createComment({
                comment: '',
                progress_idprogress: this.state.idprogress
            })
            .then(response => response.json())
            .then(function(response){
                this.state.comments.push(response);
                this.setState({
                    comments: this.state.comments
                })
            }.bind(this));
    },
    delete: function (idcomment, index) {
        model.deleteComment(
            idcomment
        ).then(response => response.json())
            .then(function (response) {
                //this.state.comments.splice(index, 1);
                getComments.bind(this)();
                this.setState({
                    comments: this.state.comments
                })
            }.bind(this))
    },
    update: function (e) {
        var b = {
            comment: e.target.value,
            idcomment: e.target.id
        };
        this.state.comments[e.target.name] = b;
        return this.setState({
            comments: this.state.comments
        })
    },
    save: function (e) {
        var b = {
            comment: e.target.value,
            idcomment: e.target.id
        };
        model.updateComment(b)
            .then(response => response.json())
            .then(function () {
                console.log('saved')
            }.bind(this))
            .catch((err)=>{
                console.error(err)
            })
    },
    render: function () {
        return (
            <MainContainer>
                <Bucket buckets={this.state.buckets} className='box blacken'/>
                <Progress progresses={this.state.progresses} className='box blacken'/>
                <Comment comments={this.state.comments}
                         update={this.update}
                         save={this.save}
                         add={this.add}
                         delete={this.delete}
                         go={this.go}
                         next={this.next} />
            </MainContainer>
        )
    }
});

module.exports = CommentContainer;