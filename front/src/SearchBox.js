import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
    }
    onkeypress(evt){
    if(evt.key==="Enter")
        {
            this.props.onSearch(evt.target.value);
        }
    }

  render() {
    return (
      <div className="SearchBox">
          <input type="text"
                  />
      </div>
    );
  }
}

export default SearchBox;
