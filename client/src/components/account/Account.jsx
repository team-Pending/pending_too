import React from 'react';
import './account.css';
import Thumbnail from './Thumbnail';
import { useAuth } from '../../utils/auth';
import { QUERY_GET_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

async function Account() {
	const { SingleUser } = useQuery(QUERY_GET_USER);
	console.log(typeof SingleUser);
	const { user } = useAuth();
	console.log(user);
	const userEmail = user.email;
	console.log(userEmail);
	if (user != null) {
		const { userData } = await SingleUser({
			variables: {
				userEmail,
			},
		});
		console.log(userData);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(Object.fromEntries(formData));
	};

	return (
		<div className="account">
			<div className="info-container">
				<h1>Hello</h1>
				{/* <h3>{`${userData.firstName} ${userData.lastName}`}</h3> */}
				<h4>maybe an about me or something</h4>
				<button onClick={null} className="store-button">
					and a link to the store
				</button>
			</div>
			<form onSubmit={handleSubmit}>
				<input type="file" name="upload" id="filename" className="upload" />
				<input type="submit" value="Submit" className="submit" />
			</form>
			<div className="thumb-container">
				<Thumbnail />
			</div>
		</div>
	);
}

export default Account;
