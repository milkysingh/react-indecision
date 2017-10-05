import React from 'react';
import AddOption from './AddOptions';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption:undefined
    };

     
    deleteAll =()=> {

        this.setState(() => ({options:[]}))
    }

    handlePick=() =>{
        const option=this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(()=>({selectedOption:option}));

    }

    handleAddOptions=(option) => {

        if (!option) {
            return 'Enter a valid value!!'
        } else if (this.state.options.indexOf(option) > -1) {
            return "Item already exist!!"
        }
        this.setState((prevState)=> ({options:prevState.options.concat(option)}));
      
    }
handleDeleteOption=(optionToRemove)=> {
this.setState((prevState) => ({
    options: prevState.options.filter(
        (option) => {
            return optionToRemove !== option;
        }
    )
}));
}
clearSelectedOption=()=>{
    this.setState(()=>({
        selectedOption:undefined
    }))
}

    render() {
            
            const subtitle = "Let computer takes your decision";

            return (
        <div>
        <Header subtitle={subtitle} />
        <Action
         hasOptions={this.state.options.length>0}
            handlePick={this.handlePick}
        />
        <Options
         options={this.state.options}
         handleDelete={this.deleteAll}
         handleDeleteOption={this.handleDeleteOption}
         />
        <AddOption handleAddOptions={this.handleAddOptions}/>
        <OptionModal
        selectedOption={this.state.selectedOption}
        clearSelectedOption={this.clearSelectedOption}
        />
        </div>
    )

}
componentDidMount=()=> {
    
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if (options) {
           
            this.setState(() => ({options }));
        }
    } catch (error) {
      //Do nothing...
      console.log(error);
    }

}
 componentDidUpdate=(prevProps,prevState) =>{
   if(prevState.options.length!==this.state.options.length) {
       const save=JSON.stringify(this.state.options);
       localStorage.setItem("options",save);
   }
 }
}
IndecisionApp.defaultProps={
options:[]
}

export default IndecisionApp;