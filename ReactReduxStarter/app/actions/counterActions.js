import * as types from './actionTypes';
var Contacts = require('react-native-contacts')
import ContactsWrapper from 'react-native-contacts-wrapper';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function openPicker() {
  return (dispatch) => {
    console.log('will open picker');
    ContactsWrapper.getEmail()
        .then((email) => {
        console.log("email is", email);
        dispatch({
          type: types.CONTACTS,
          payload: email,
        });
      })
      .catch((error) => {
        console.log("ERROR CODE: ", error.code);
        console.log("ERROR MESSAGE: ", error.message);
        dispatch({
          type: types.CONTACTS,
          payload: error.message,
        });
      });
  }
}

export function openPickerAllDetails() {
  return (dispatch) => {
    console.log('will open picker- All Details -');
    ContactsWrapper.getContact()
        .then((contactObj) => {
        console.log('contactObj ',contactObj);
        console.log("email is", contactObj.email);
        if(contactObj.email){
          dispatch({
            type: types.CONTACTS,
            payload: contactObj.email,
          });
        } else {
          dispatch({
            type: types.CONTACTS,
            payload: 'No Email',
          });
        }

      })
      .catch((error) => {
        console.log("ERROR CODE: ", error.code);
        console.log("ERROR MESSAGE: ", error.message);
        dispatch({
          type: types.CONTACTS,
          payload: error.message,
        });
      });
  }
}

export function getcontacts() {
  return (dispatch) => {
    console.log('Background Contacts fetch');
    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        console.log('permissionDenied');
      } else if(err){
        console.log('error', err);
      } else {
        console.log('contacts');
        console.log(contacts[0].givenName);
        dispatch({
          type: types.CONTACTS,
          payload: contacts[0].givenName,
        });
      }
    });
  };
}
