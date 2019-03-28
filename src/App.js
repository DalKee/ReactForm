import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    formList:[]
  }

  addFilds = () => {
    let tempVar = this.state.formList;
    tempVar.push({firstName:"",lastName:""})
    this.setState({formList : tempVar})
  }
  getValueFromInput = (e, indx)=>{
    let tempVar = this.state.formList;
    tempVar[indx][e.target.name] = e.target.value

    this.setState({formList : tempVar},()=>{console.log(this.state.formList)})
  }

  render() {
    return (
      <React.Fragment>
        <div className="formContainer">
          <h3>this is a singl Form!</h3>
          {
            this.state.formList.map((elm,indx)=>{
              return(
                <div key={indx}>
                  <hr />
                  <label>firstName:{indx}<input type="text" name="firstName" onChange={(e)=>this.getValueFromInput(e,indx)}/></label>
                  <br/><label>lastName:{indx}<input type="text" name="lastName" onChange={(e)=>this.getValueFromInput(e,indx)}/></label>
                  <hr />
                </div>
              )
            })
          }

        <button onClick={()=>this.addFilds()}>Add filds!</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
