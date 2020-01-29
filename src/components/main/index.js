import React, {Component} from "react";
import Data from "../../services/data";
import Utils from "../../services/utils";
import Clue from "../clue";

class Main extends Component {

  constructor(props) {
    super(props);
    this.data = new Data();
    this.state = {data: [], success: true}
  }

  async componentDidMount() {
    let fetchedData = await this.data.get({category: 25, min_date: '1996-01-01', max_date: '1996-12-31'});
    let data = this.manipulateData(fetchedData['data']);
    this.setState({
      data,
      success: fetchedData['success']
    });
  }

  manipulateData(data) {
    data = data.filter(d => d['invalid_count'] == null && d['value'] != null);
    data = Utils.sample(data);
    data = Utils.sort(data, 'value');
    return data
  }

  createQuestions() {
    return this.state.data.map((data, index) => {
      return <Clue key={index} question={data['question']} answer={data['answer']} value={data['value']}/>
    })
  }

  dataErrorMessage() {
    if (!this.state.success) {
      return <div className='alert alert-danger'>Oops! Something went wrong :(</div>
    }
  }

  render() {
    return (
        <div className='pt-4'>
          <h2>Category: Science!</h2>
          {this.dataErrorMessage()}
          <div className='card-deck'>
            {this.createQuestions()}
          </div>
        </div>
    );
  }
}

export default Main;