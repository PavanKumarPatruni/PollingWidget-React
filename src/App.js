import React from 'react';

import PollingWidget from './components/polling_widget/PollingWidget';
import PollingImageWidget from './components/polling_widget/PollingImageWidget';
import './App.css';

function App() {

  let polling = {
    question: 'Whats your favorite programiing language to work?',
    answers: [{
      answer: 'Java',
      img: './assets/images/java.png',
      percent: '14'
    }, {
      answer: 'Kotlin',
      img: './assets/images/kotlin.png',
      percent: '56'
    }, {
      answer: 'JavaScript',
      img: './assets/images/js.png',
      percent: '22'
    }, {
      answer: 'Python',
      img: './assets/images/python.jpg',
      percent: '8'
    }]
  }

  return (
    <div className="App">
      <PollingWidget polling={polling} onSelect={() => this.onPoll()}/>
      <PollingImageWidget polling={polling} onSelect={() => this.onPoll()}/>
    </div>
  );
}

export default App;
