import React from 'react';
import Router from 'react-router';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

var Profile = React.createClass({
	getInitialState: function(){
    return {
      notes: [1,2,3],
      bio: {
        name: 'Tyler McGinnis'
      },
      repos: ['a', 'b', 'c']
    }
  },
	render: function(){
    console.log(this.props)
    return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes notes={this.state.notes} />
				</div>
			</div>
		)
  }
});

module.exports = Profile;