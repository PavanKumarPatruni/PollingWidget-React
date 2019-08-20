import React, { Component } from 'react'

import './polling_widget.scss'

import javaImg from '../../assets/images/java.png';
import kotlinImg from '../../assets/images/kotlin.png';
import jsImg from '../../assets/images/js.png';
import pythonImg from '../../assets/images/python.jpg';

class PollingImageWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            polling: props.polling,
            isClicked: false
        };
    }

    onClick(index) {
        let {polling} = this.state;
        let count = 0; 
        polling.answers.map(answer=> {
            if (count++ === index) {
                return answer.active = true;
            } else {
                return answer.active = false;
            }
        });

        this.setState({
            isClicked : true
        });

        this.props.onSelect(index);
    }

    render() {
        let { polling, isClicked } = this.state;
        let { answers } = polling;
        
        let answersComponent = null;

        if (answers && answers.length > 0) {
            let itemsArray = [];
            answers.forEach((answer, index) => {

                let percentage = 0;
                let percentComponent = null;

                if (isClicked) {
                    percentage = answer.percent % 100;
                    percentComponent = (<span className="percent">{answer.percent}%</span>);
                }

                let img = '';
                switch (index) {
                    case 0:
                        img = javaImg;
                        break;
                    case 1:
                        img = kotlinImg;
                        break;
                    case 2:
                        img = jsImg;
                        break;
                    case 3:
                        img = pythonImg;
                        break;
                    default:
                        img = javaImg;
                        break
                }

                let item = (<div key={index} className={"answer-div " + (answer.active ? "active" : "")} onClick={() => this.onClick(index)}>
                    <img className="answer-img" src={img} alt={answer.answer}/>
                    <div className="answer-image-div overlay">
                        <div className={"answer-progress " + (answer.active ? "active" : "")} style={{ width: `${percentage}%`}}></div>
                        <div className="answer-overlay">
                            <span className="answer">{answer.answer}</span>
                            {percentComponent}
                        </div>
                    </div>
                </div>);
                itemsArray.push(item);
            });

            answersComponent = itemsArray;
        } else {
            answersComponent = (<span>No answers found</span>);
        }

        return (
            <div className="polling-div">
                <div className="question-div">
                    <span className="question">{polling.question}</span>
                </div>
                <div className="answers-div answers-image-div">
                    {answersComponent}
                </div>
            </div>
        );
    }
}

export default PollingImageWidget;

