import * as types from './actionTypes';
var Contacts = require('react-native-contacts')
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

export function getcontacts() {
  return (dispatch) => {
    console.log('hello will now try to get contacts');
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
