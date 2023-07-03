import React from 'react';
import './App.css';
import DemoEventComponent from './components/demo-event-component';
import TodoEventComponent from './components/todo-event-component';

function App() {
  return (
    <div className="App">
      <h2>Events in React</h2>
      <p>When creating fully feature front-end applications you often need to respond to events in your application. Unfortunately, browsers sometimes have varying
        features implemented for events; but lucky for us, React offers us a solution that makes our lives easier. In React we have what's called a "Synthetic Event", which
        is a wrapper version of the event that you interact with, meanwhile you let React deal with the event features of the browser you're using automatically.
      </p>
      <p>In this lab, let's explore how to create events in React, and learn about the synthentic event.
      </p>


      <div className="section-container">
        <DemoEventComponent></DemoEventComponent>


      </div>
      <div className="todo-container">
        <TodoEventComponent></TodoEventComponent>
      </div>

      <div>
        <a href="https://react.dev/learn/responding-to-events">https://react.dev/learn/responding-to-events</a>
      </div>
      <div>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events">https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, look into event propagation, then create an event that uses the concept of event propagation. Next, try to stop
      the event from propagating.
      https://react.dev/learn/responding-to-events*/}
    </div>
  );
}

export default App;
