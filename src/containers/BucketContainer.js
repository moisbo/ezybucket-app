import React from 'react';
import MainContainer from './MainContainer';
import Bucket from '../components/Bucket';
import model from '../utils/BucketModel';

function getBuckets() {
    model.getBuckets({iduser: this.props.routeParams.iduser})
        .then((response) => {
            return response.json()
        })
        .then(function(response){
            this.setState({
                iduser: this.props.routeParams.iduser,
                buckets: response
            })
        }.bind(this))
}

var BucketContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            iduser: '',
            buckets: [],
            bucket: ''
        }
    },
    componentDidMount: function() {
        getBuckets.bind(this)()
    },
    componentWillUnmount: function () {
        console.log('unmounting')  
    },
    go: function () {
        this.context.router.push({
            pathname: '/'
        });
    },
    next: function (bucket) {
        this.context.router.push({
            pathname: '/progress/' + bucket.id,
            state:{
                iduser: this.state.iduser,
                title: bucket.value,
                buckets: this.state.buckets
            }
        });
    },
    add: function () {
        //console.log('add bucket iduser: '+ this.state.iduser)
        model.createBucket({
                bucket: '',
                user_iduser: this.state.iduser
            })
            .then(response => response.json())
            .then(function(response){
                this.state.buckets.push(response);
                this.setState({
                    buckets: this.state.buckets
                })
            }.bind(this));
    },
    delete: function (idbucket, index) {
        model.deleteBucket(
                idbucket
            ).then(response => response.json())
            .then(function (response) {
                //this.state.buckets.splice(index, 1);
                getBuckets.bind(this)();
                /*this.setState({
                    buckets: this.state.buckets
                })*/
            }.bind(this))
            .catch((err)=>{
                console.log(err)
            })
    },
    update: function (e) {
        var b = {
            bucket: e.target.value,
            idbucket: e.target.id
        };

        this.state.buckets[e.target.name] = b;
        return this.setState({
            buckets: this.state.buckets
        })
    },
    save: function (e) {
        var b = {
            bucket: e.target.value,
            idbucket: e.target.id
        };
         model.updateBucket(b)
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
                <Bucket buckets={this.state.buckets}
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

module.exports = BucketContainer;