import React from 'react';
import Navigation from '../common/navigate/Navigation';
import CustomerLoginForm from '../components/customerLoginForm/CustomerLoginForm';
import { Button } from '@mui/material';

const CustomerLogin = () => {
  const handleClick = () => {
    window.location.href = 'https://cl-b2b.delhivery.com/#/login';
  };

  return (
    <>
      <Navigation />
      <div><Button onClick={handleClick}>
      Go to Login Form
      </Button></div>
      <CustomerLoginForm />
    </>
  );
};

export default CustomerLogin;