const express = require('express');
const Contact = require('../models/contact');

exports.saveContact = async (requestBody) => {
    try {
        let contactData = requestBody;
        let contact = new Contact(contactData);
        let createdContact = await contact.save();
        return createdContact;
    }catch(error) {
        throw error;
        // console.log(error)
    }
}


exports.loadContacts = async (userId) => {
    try {
        var contact = await Contact.find({'userId':userId}).select();
        return contact;
    } catch(error) {
        throw error;
    }
};


// exports.loadContact = async (requestBody) => {
//     try {
//         let contactData = requestBody
//         let contact = new Contact(contactData)
//         let createdContact = await contact.save();
//         return createdContact;
//     }catch(error) {
//         throw error;
//         // console.log(error)
//     }
// }