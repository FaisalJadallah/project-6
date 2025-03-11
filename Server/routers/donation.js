// route file: donations.js

const express = require('express');
const router = express.Router();
const { Donation } = require('../models'); // تأكد من استيراد النموذج بشكل صحيح

// Route to handle donation submission
router.post('/donations', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    userId,
    beneficiaryOrg,
    projectName,
    projectId,
    amount,
    cardNumber,
    expiryDate,
    ccv,
  } = req.body;

  try {
    const donation = await Donation.create({
      firstName,
      lastName,
      email,
      phone,
      userId,
      beneficiaryOrg,
      projectName,
      projectId,
      amount,
      cardNumber,
      expiryDate,
      ccv,
    });

    res.status(201).json(donation); // إرسال الرد مع البيانات المحفوظة
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(500).json({ error: 'Error saving donation' });
  }
});

module.exports = router;
