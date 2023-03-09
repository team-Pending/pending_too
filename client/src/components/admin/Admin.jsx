import React from 'react';
import UserList from './UserList';
import ProductList from './ProductList';
import './admin.css';
import { useAuth } from '../../utils/auth';

function Admin(props) {
	const { user } = useAuth();
	if (user.isAdmin) {
		return (
			<div className="admin">
				<div className="admin__container">
					<h1>Welcome to Admin Page</h1>
					<UserList user={props.user} />
					<ProductList product={props.product} />
				</div>
			</div>
		);
	} else {
		return (
			<div className="admin">
				<div className="admin__container">
					<h1>Go suck a fat one!</h1>
				</div>
			</div>
		);
	}
}

export default Admin;
