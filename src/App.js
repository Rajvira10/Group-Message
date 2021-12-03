import './App.css';
import { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import db from "./firebase";
import firebase from 'firebase';
import 'firebase/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import {  } from '@material-ui/core';

function App(){
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(()=>{
    const ref = db.firestore().collection('messages')
    ref.orderBy('timestamp','desc').onSnapshot((querySnapshot)=>{
      const items = []
      querySnapshot.forEach((doc)=> items.push({id: doc.id,message: doc.data()}))
      setMessages(items)
    })

  },[]);

  useEffect(()=>{
    setUsername(prompt("Please enter your name"));
  },[]);

  
  const sendMessage = (event)=>{
    event.preventDefault();
    firebase.firestore().collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); 
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
      <h1>Messenger Clone</h1>
      <form className="app__form">
      <FormControl className="app__formControl">

          <Input placeholder="Enter a message..." className="app__input" value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        

      </FormControl>
      
      
      </form>
      <FlipMove>
        {
          messages.map(({id,message})=>(
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
    
    </div>
  );
}

export default App;
