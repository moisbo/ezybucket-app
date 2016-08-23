import React from 'react';
import MainContainer from './MainContainer';
import Bucket from '../components/Bucket';
import Progress from '../components/Progress';
import model from '../utils/ProgressModel';

function getProgresses () {
    model.getProgress({idbucket: this.props.routeParams.idbucket})
        .then((response)=>{
            return response.json()
        })
        .then(function(response){
            this.setState({
                title: this.props.location.state.title,
                iduser: this.props.location.state.iduser,
                idbucket: this.props.routeParams.idbucket,
                buckets: this.props.location.state.buckets,
                progresses: response
            })
        }.bind(this))
}

var ProgressContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            iduser:'',
            buckets: [],
            idbucket:'',
            progresses: []
        }
    },
    componentDidMount: function () {
        getProgresses.bind(this)();
    },
    go: function () {
        this.context.router.push({
            pathname: '/bucket/' + this.state.iduser,
            state:{
                buckets: this.state.buckets
            }
        });
    },
    next: function (progress) {
        this.context.router.push({
            pathname: '/comment/' + progress.id,
            state:{
                title: progress.value,
                iduser: this.state.iduser,
                idbucket: this.state.idbucket,
                buckets: this.state.buckets,
                progresses: this.state.progresses
            }
        });
    },
    add: function () {
        //console.log('add bucket iduser: '+ this.state.iduser)
        model.createProgress({
                progress: '',
                bucket_idbucket: this.state.idbucket
            })
            .then(response => response.json())
            .then(function(response){
                this.state.progresses.push(response);
                this.setState({
                    progresses: this.state.progresses
                })
            }.bind(this));
    },
    delete: function (idprogress, index) {
        model.deleteProgress(
            idprogress
        ).then(response => response.json())
            .then(function (response) {
                //this.state.progresses.splice(index, 1);
                getProgresses.bind(this)();
                this.setState({
                    progresses: this.state.progresses
                })
            }.bind(this))
            .catch((err)=>{
                console.log(err)
            })
    },
    update: function (e) {
        var b = {
            progress: e.target.value,
            idprogress: e.target.id
        };

        this.state.progresses[e.target.name] = b;
        return this.setState({
            progresses: this.state.progresses
        })
    },
    save: function (e) {
        var b = {
            progress: e.target.value,
            idprogress: e.target.id
        };
        model.updateProgress(b)
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
                <Progress title={this.state.title}
                          progresses={this.state.progresses}
                          add={this.add}
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

module.exports = ProgressContainer;