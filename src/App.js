import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { value : 0 };
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }


onPlus(){this.setState({value : this.state.value +1})
};

onMinus(){
  this.setState({value : this.state.value - 1})
};


    render(){
        return  (
            <div>

              <Counter number ={this.state.value}
                  handleUp = {this.onPlus}
                  handleDown = {this.onMinus}/>

            </div>
        );
    }
}


export default App;
