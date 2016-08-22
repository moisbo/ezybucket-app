import React from 'react';
import MainContainer from './MainContainer';
import Bucket from '../components/Bucket';
import Progress from '../components/Progress';
import model from '../utils/ProgressModel';

var ProgressContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps:function () {
        return {
            idProgress: 1
        }
    },
    getInitialState: function() {
        return {
            buckets: [],
            progress: []
        }
    },
    componentDidMount: function () {
        model.getProgress({idbucket: 1})
            .then((response)=>{
                return response.json()
            })
            .then(function(response){
                this.setState({
                    buckets: this.props.location.state.buckets,
                    progress: response
                })
            }.bind(this))
    },
    next: function (e) {
        e.preventDefault();
        this.context.router.push({
            pathname: '/comment/' + this.props.idProgress,
            state:{
                buckets: this.state.buckets,
                progress: this.state.progress
            }
        });
    },
    add: function (iduser) {
        console.log('add ' + iduser)
    },
    delete: function (idprogress) {
        console.log('delete ' + idprogress)
    },
    render: function () {
        return (
            <MainContainer>
                <Bucket buckets={this.state.buckets} />
                <Progress progress={this.state.progress}
                          add={this.add}
                          delete={this.delete}
                          next={this.next} />
            </MainContainer>
        )
    }
});

module.exports = ProgressContainer;