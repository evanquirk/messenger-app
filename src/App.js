import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css'

export const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  
  const {
    REACT_APP_PROJECT_ID,
    REACT_APP_USERNAME,
    REACT_APP_SECRET
  } = process.env


  return (
    <ChatEngine
      height='100vh'
      projectID={REACT_APP_PROJECT_ID}
      userName={REACT_APP_USERNAME}
      userSecret={REACT_APP_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}