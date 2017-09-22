import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const style = {
    margin: 5
};
class Follower extends Component {

    constructor(props) {
        super(props);
    }

   

    render() {
        return (
            <div>
                <List>
                    <a>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <div onClick={()=>{
                                this.props.handleName(this.props.follower.login);
                                this.props.filter();
                                }}>
                            < Avatar src = {
                        this.props.follower.avatar_url
                    }
                    size = {
                        30
                    }
                    style = {
                        style
                    } />  </div>}
                    onClick={()=>{
                        console.log("hola")
                    }}>
                        {this.props.follower.login}
                    </ListItem>
                    </a>
                </List>
            </div>
        );
    }
}

export default Follower;
