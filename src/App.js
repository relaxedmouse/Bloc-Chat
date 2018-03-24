import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCMFcQI_v_TffhopjJywy6KcP-XSwTCC5E",
  authDomain: "bloc-chat-b1a93.firebaseapp.com",
  databaseURL: "https://bloc-chat-b1a93.firebaseio.com",
  projectId: "bloc-chat-b1a93",
  storageBucket: "bloc-chat-b1a93.appspot.com",
  messagingSenderId: "419143215698"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
