import React from "react";


export default class Apps extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    userInput: '',
    list: [],
     }
    }
    
    changeUserInput(input){
      this.setState({
         userInput: input
     });
    }
    
    onCross(){
        this.setState({
          decoration: this.state.decoration==='none'?'line-through':'none'
        })
      }
    delete(index){                      
      // let decoration = this.state.decoration;                                           
      // decoration.splice(index, 1);                                            
      document.getElementById(index).style.textDecoration="line-through"
    }                                                       

     addToList(input){                                      
       let listArray= this.state.list;
    
       listArray.push(input);
    
     this.setState({
      list: listArray,
      userInput: ''
     })
    }  

  render() {
  return(
    <center>
  <div className="Apps">
  <input
 onChange={ (e)=>this.changeUserInput(e.target.value) }
 value={this.state.userInput}
 type="text"
 />
 <button onClick={ ()=> this.addToList(this.state.userInput) }>Add</button>
 
 <ul>
   {this.state.list.map( (val,index)=> <li id={index} onClick={()=>{this.delete(index)}} > {val}</li>)}
  </ul>      

  </div>
  </center>
    );
   }
  }

    
  

