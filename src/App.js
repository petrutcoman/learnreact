import React from 'react';
import './App.css';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {mesaj:"0",term1:0,opr:null,}
    this.resetdisplay= this.resetdisplay.bind(this);
  };
  
  resetdisplay(){
    this.setState({mesaj:"0"});
  };

  aduna(op){
    var nr=Number(this.state.mesaj);
    this.setState({term1:nr,opr:op,})
    var str="";
    if (op==="rad"){
      str="sqrt( "+this.state.mesaj+" )";
      this.setState({mesaj:str} );
    }
    else{
        str=this.state.mesaj+" "+ op+" ";
        this.setState({mesaj:str});
    }
  }
  

  evaluate(){
    if (this.state.opr!=="rad"){
    var expr=this.state.mesaj.slice(this.state.mesaj.indexOf(this.state.opr)+1,this.state.mesaj.length);
    }
    let msg="";
    let rezultat=0;
    
    switch (this.state.opr){
      case '+': 
        rezultat = this.state.term1 + Number(expr);
        break;
      
      case '-':
        rezultat = this.state.term1 - Number(expr);
        break;
      
      case '*':
        rezultat = this.state.term1 * Number(expr);
        break;
      
      case '/':
        if (Number(expr)===0){msg='Division by 0 not allowed!';break;}
        rezultat = this.state.term1 / Number(expr);
        break;
      
      case '%':
        rezultat= (this.state.term1 / 100) * Number(expr);
        break;
      
      case 'rad':
        rezultat = Math.sqrt(this.state.term1);
        break;
      
      case '^':
        rezultat=Math.pow(this.state.term1,Number(expr));
        break;
      
      default:
        msg='Err';
        break;
      
    }
    if((msg==='Err')||(msg==='Division by 0 not allowed!')){
      this.setState({mesaj:msg})
    }
      else
    {
      msg=this.state.mesaj +" = "+ rezultat.toString();
      this.setState({mesaj:msg});
    }

  };

  test(nr){
    if (this.state.mesaj==="0"){
      if (nr==="."){
        var msg=this.state.mesaj+nr;       
      }
      else{
        msg=nr;
      }
    }else{
      if (nr==="."){
        if (this.state.mesaj.indexOf(nr)===-1){
          msg=this.state.mesaj+nr;       
        }else{
        msg=this.state.mesaj;
        }
      }
      else{
        msg=this.state.mesaj+nr;
      }
    }
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
      <button className="component-operation" onClick={()=>this.aduna("/")}>/</button>
      </div>
      <div>
      <button className="component-button" onClick={()=>this.test('4')}>4</button>
      <button className="component-button" onClick={()=>this.test('5')}>5</button>
      <button className="component-button" onClick={()=>this.test('6')}>6</button>
      <button className="component-operation" onClick={()=>this.aduna("*")}>*</button>
      </div>
      <div> 
      <button className="component-button" onClick={()=>this.test('1')}>1</button>
      <button className="component-button" onClick={()=>this.test('2')}>2</button>
      <button className="component-button" onClick={()=>this.test('3')}>3</button>
      <button className="component-operation"onClick={()=>this.aduna("+")}>+</button>
      </div>
      <div>
      <button className="component-button" onClick={()=>this.test('0')}>0</button>
      <button className="component-button" onClick={()=>this.test('.')}>.</button>
      <button className="component-operation" onClick={()=>this.aduna("%")}>%</button>
      <button className="component-operation" onClick={()=>this.aduna("-")}>-</button>
      </div>
      <div>
      <button className="component-operation" onClick={this.resetdisplay}>C</button>
      <button className="component-operation" onClick={()=>this.aduna("^")}>x^y</button>
      <button className="component-operation" onClick={()=>this.aduna("rad")}>sqrt</button>
      <button className="component-operation" onClick={()=>this.evaluate()}>=</button>
      </div>
      </div>
     </div>
    );
  }
}


