import React from 'react';
import './account.css';
import Thumbnail from './Thumbnail';
import { useAuth } from '../../utils/auth';



function Account() {
	const {user} = useAuth();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
	};

	return (
		<div className="account">
			<div className="info-container">
				<h1>Hello</h1>
				<h3>{`${user.firstName} ${user.lastName}`}</h3>
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
