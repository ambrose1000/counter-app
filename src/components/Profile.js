import React  from 'react';
import profile from '../profile.jpeg';

function Profile(props){
	const {name, number, email, occ} =props;

	 return (
    	<div className="Profile p-2 ma-3">
     		<header className="App-header">
       			<img  src={profile} className="App-profile w-50" alt="profile" />
        		<h2>Name: {name} </h2>
        		<h2>Number: {number} </h2>
        		<h2>Email: {email} </h2>
       			<p>Profile {occ} </p>
       
     		</header>
   		</div>
  );
}
		
	

export default Profile;