import React from 'react';
import './account.css'
import Thumbnail from './Thumbnail';

function Account() {
  return (
    <div className='account'>
      <h1>Hello</h1>
      <form action="">
        <input type="file" name="upload" id="filename" className='upload'/>
        <input type="submit" value="button"    className='submit'/>
      </form>
      <Thumbnail />
    </div>
  );
}

export default Account;
