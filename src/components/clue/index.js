import React, {Component} from "react";
import './index.css'
import Answer from "../answer";

class Clue extends Component {

  constructor(props) {
    super(props);
    this.question = props.question;
    this.value = props.value;
    this.answer = props.answer;
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      toggled: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      toggled: true
    });
  }

  cssClasses() {
    let classes = {
      card: 'card bg-primary',
      value: 'card-body front text-center',
      question: 'card-body back text-center hidden',
      answer: 'hidden'
    };
    if (this.state.toggled) {
      classes = {
        card: 'card bg-warning',
        value: 'card-body front text-center hidden',
        question: 'card-body back text-center',
        answer: ''
      };
    }
    return classes;
  }

  render() {
    let classes = this.cssClasses();
    return (
        <div className={classes.card} onClick={this.handleClick} data-testid='clue'>
          <p className={classes.value} data-testid='clue-value'>{this.value}</p>
          <p className={classes.question} data-testid='clue-question'>{this.question}</p>
          <span className={classes.answer} data-testid='clue-answer'>
            <Answer answer={this.props.answer}/>
          </span>
        </div>
    )
  }

}

export default Clue;