import "./footer.css"
import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-4 text-muted bg-white">
      <div className="mb-2 mt-4">
       <p style={{fontSize:"20px", fontWeight:"500"}}>Nikmati hiburan tanpa batas! <a href='https://kutapay.com/'  className='text'>Beli Paket TV</a> hari ini</p>
      </div>
      &copy; {new Date().getFullYear()} PT Titan Agung Persada. All rights reserved.
    </footer>
  );
}
