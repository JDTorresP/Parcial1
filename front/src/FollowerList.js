import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import React, {Component} from 'react';
import Follower from './Follower';

const style = {
    margin: 5
};

class FollowerList extends Component {
    constructor(props) {
        super(props);
    }
    renderFollowers(){

        return this.props.followers.map(
            (t,i)=>{
              return (<Follower follower={t} key={i}/>); 
            }
        );
    }
   
    
    render() {  
        return (
            <div>
                 {this.renderFollowers()}
            </div>
        );
    }
}

export default FollowerList;
