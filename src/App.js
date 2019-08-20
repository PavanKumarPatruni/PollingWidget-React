import React, {Component} from 'react';

import PollingWidget from './components/polling_widget/PollingWidget';
import PollingImageWidget from './components/polling_widget/PollingImageWidget';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      poll: {
        question: 'Whats your favorite programming language to work?',
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
    }

      this.onSelect = this.onSelect.bind(this)
  }

  onSelect(index) {
    console.log('Clicked on ' + index);
  }

  render() {

    let {poll} = this.state;

    return (
      <div className="App">
        <PollingWidget polling={poll} onSelect={this.onSelect}/>
        <PollingImageWidget polling={poll} onSelect={this.onSelect}/>
      </div>
    );
  }
}

export default App;
