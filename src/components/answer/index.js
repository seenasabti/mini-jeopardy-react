import React, {Component} from "react";

class Answer extends Component {

  constructor(props) {
    super(props);
    this.answer = props.answer.toLowerCase();
    this.state = {value: '', correct: false, answered: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let userAnswer = this.state.value.toLowerCase();
    this.setState({
      answered: true,
      correct: this.answer === userAnswer
    });
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  correctAnswer() {
    return (
        <div className="text-center text-success p-4" data-testid='correct_answer'>
          Correct Answer!
        </div>
    );
  }

  wrongAnswer() {
    return (
        <div className="text-center text-danger p-4" data-testid='wrong_answer'>
          Wrong Answer :(
        </div>
    );
  }

  defaultAnswer() {
    return (
        <div className="input-group p-md-4 pb-4" data-testid='default_answer'>
          <input type="text" className="form-control" placeholder="Type your answer..." value={this.state.value}
                 onChange={this.handleChange} data-testid='input'/>
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.handleClick}>Go!</button>
          </div>
        </div>
    );
  }

  render() {
    let items = this.defaultAnswer();
    if (this.state.answered && this.state.correct) {
      items = this.correctAnswer();
    } else if (this.state.answered && !this.state.correct) {
      items = this.wrongAnswer();
    }
    return items
  }
}

export default Answer