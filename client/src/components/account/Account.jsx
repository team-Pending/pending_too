import React from 'react';
import { useState } from 'react';
import './account.css';
import Thumbnail from './Thumbnail';
import { useAuth } from '../../utils/auth';
import { uploadFile, deletePhoto } from '../../utils/s3';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations';

function Account() {
  const { user } = useAuth();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleSubmit = async (e, file) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var email = user.email;
    var productName = formData.productName;
    var productDescription = formData.productDescription;
    var price = formData.price;
    var s3Key = await uploadFile(file);

    addProduct(email, productName, productDescription, price, s3Key);
  };

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='account'>
      <div className='info-container'>
        <h1>Hello</h1>
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <h4>
          Welcome to my page and taking a moment to see what I have to offer. <br />
          I have enjoy outdoor activities and creating unique ways of combining images. <br />
          Please enjoy my page. I know I enjoy moving around and checking out what others are up to
          as well.{' '}
        </h4>

        <button onClick={null} className='store-button'>
          and a link to the store
        </button>
      </div>
      <form
        onSubmit={() => {
          handleSubmit(e, file);
        }}
      >
        <input
          type='file'
          name='upload'
          id='filename'
          className='upload'
          required
          onChange={handleFileInput}
        />
        <input
          type='text'
          name='productName'
          id='productName'
          required
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          placeholder='Enter Product Name'
        />
        <input
          type='text'
          name='productDescription'
          id='productDescription'
          required
          value={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
          placeholder='Enter Product Description'
        />
        <input
          type='text'
          name='price'
          id='price'
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder='Enter Price'
        />

        <input type='submit' value='Submit' className='submit' />
      </form>
      <div className='thumb-container'>
        <Thumbnail />
      </div>
    </div>
  );
}

export default Account;
