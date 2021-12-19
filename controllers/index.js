const Customer = require('../models/customer');
const mongoose = require('mongoose');

// create new cause
export function createCustomer (req, res) {
    const customer = new Customer({
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_phone: req.body.customer_phone,
        customer_address: req.body.customer_address,
        customer_wallet: req.body.customer_wallet,
        created_at: Date.now(),
    });
    
    return customer
      .save()
      .then((data) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          Customer: data,
        });
      })
      .catch((error) => {
          console.log(error);
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      });
  }