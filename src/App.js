import React from 'react';
import './App.css';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {mesaj:"0",}
    this.resetdisplay= this.resetdisplay.bind(this);
  }
  resetdisplay(){
    this.setState({mesaj:"0"});
  };

  test(nr){
    if (this.state.mesaj==="0"){
      var msg=nr;
    }else{
    msg=this.state.mesaj+nr;
    };
    this.setState({mesaj:msg});   
  }

  render(){
    return (
     <div className="App">
       <div className="center-comp">
      <div className="display-comp">{this.state.mesaj}</div>
      <div>
      <button className="component-button" onClick={()=>this.test('7')}>7</button>
      <button className="component-button" onClick={()=>this.test('8')}>8</button>
      <button className="component-button" onClick={()=>this.test('9')}>9</button>
      <button className="component-operation" /* onClick={impart(operatii.value)}*/>/</button>
      </div>
      <div>
      <button className="component-button" onClick={()=>this.test('4')}>4</button>
      <button className="component-button" onClick={()=>this.test('5')}>5</button>
      <button className="component-button" onClick={()=>this.test('6')}>6</button>
      <button className="component-operation"/*onClick={inmult(operatii.value)}*/>*</button>
      </div>
      <div> 
      <button className="component-button" onClick={()=>this.test('1')}>1</button>
      <button className="component-button" onClick={()=>this.test('2')}>2</button>
      <button className="component-button" onClick={()=>this.test('3')}>3</button>
      <button className="component-operation"/*onClick={aduna(operatii.value)}*/>+</button>
      </div>
      <div>
      <button className="component-button" onClick={()=>this.test('0')}>0</button>
      <button className="component-operation" onClick={()=>this.test('.')}>.</button>
      <button className="component-operation"/*onClick={procent(operatii.value)}*/>%</button>
      <button className="component-operation"/*onClick={scade(operatii.value)}*/>-</button>
      </div>
      <div>
      <button className="component-operation" onClick={this.resetdisplay}>C</button>
      <button className="component-operation"/*onClick={putere(operatii.value)}*/>x^y</button>
      <button className="component-operation"/*onClick={radical(operatii.value)}*/>sqrt</button>
      <button className="component-operation"/*onClick={evalueaza(operatii.value)}*/>=</button>
      </div>
      </div>
     </div>
    );
  }
}


