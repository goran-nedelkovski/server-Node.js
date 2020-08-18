const express = require('express');

const contactsService = require('../services/contacts-service');
const tokenUtils = require('../utils/token-utils');


exports.saveContact = async (req, res) => {
    try {
        let saveContact =  await contactsService.saveContact(req.body);
        return res.json(saveContact) 
        // console.log(res)
    } catch (error) {
        return res.json({ status:400, message: error.message})
        // console.log(error)
    }
}


exports.loadContacts = async (req, res) => {
    try {
          await tokenUtils.verifyToken(req, res);
          var contacts = await contactsService.loadContacts(req.params.userId);
          return res.json(contacts);
        // console.log(res)
    } catch (error) {
        return res.json({ status:400, message: error.message})
        // console.log(error)
    }
}



