import React,{Component}from "react";
export default class AddOption extends Component {
    state={
        error:undefined
    }
  
    handleForm=(e) => {

        e.preventDefault();
        let option = e.target.elements.input.value;
        let error = this.props.handleAddOptions(option);

        this.setState(()=> ({error}));
        if(!error){
            e.target.elements.input.value = '';
        }
      
    }
    render() {
            return (
<form onSubmit={this.handleForm}>

{this.state.error&&<p>{this.state.error}:</p>}

<input type="text" name="input" />

<button>Add option</button>

</form>
     
)
}
}