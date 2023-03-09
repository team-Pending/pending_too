import React from 'react';
import { useState } from 'react';
import './account.css';
import Thumbnail from './Thumbnail';
import { useAuth } from '../../utils/auth';
import { uploadFile, deletePhoto } from '../../utils/s3';

function Account() {
	const { user } = useAuth();
	const [productName, setProductName] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [price, setPrice] = useState('');
	const [file, setFile] = useState('');

	const handleSubmit = (e) => {
		uploadFile();
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
				<input
					type="file"
					name="upload"
					id="filename"
					className="upload"
					required
					value={file}
					onChange={(event) => setFile(event.target.value)}
				/>
				<input
					type="text"
					name="productName"
					id="productName"
					required
					value={productName}
					onChange={(event) => setProductName(event.target.value)}
					placeholder="Enter Product Name"
				/>
				<input
					type="text"
					name="productDescription"
					id="productDescription"
					required
					value={productDescription}
					onChange={(event) => setProductDescription(event.target.value)}
					placeholder="Enter Product Description"
				/>
				<input
					type="text"
					name="price"
					id="price"
					required
					value={price}
					onChange={(event) => setPrice(event.target.value)}
					placeholder="Enter Price"
				/>

				<input type="submit" value="Submit" className="submit" />
			</form>
			<div className="thumb-container">
				<Thumbnail />
			</div>
		</div>
	);
}

export default Account;
