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
                    <ListItem
                        disabled={true}
                        leftAvatar={< Avatar src = {
                        this.props.follower.avatar_url
                    }
                    size = {
                        30
                    }
                    style = {
                        style
                    } />}>
                        {this.props.follower.login}
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default Follower;
