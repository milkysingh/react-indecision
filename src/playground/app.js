class IndecisionApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                options: props.options
            };
            this.deleteAll = this.deleteAll.bind(this);
            this.handlePick = this.handlePick.bind(this);
            this.handleAddOptions = this.handleAddOptions.bind(this);
            this.handleDeleteOption=this.handleDeleteOption.bind(this);
        }
         componentDidMount() {
             
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
          componentDidUpdate(prevProps,prevState) {
            if(prevState.options.length!==this.state.options.length) {
                const save=JSON.stringify(this.state.options);
                localStorage.setItem("options",save);
            }
          }
        deleteAll() {

            this.setState(() => ({options:[]}))
        }

        handlePick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);

        }

        handleAddOptions(option) {

            if (!option) {
                return 'Enter a valid value!!'
            } else if (this.state.options.indexOf(option) > -1) {
                return "Item already exist!!"
            }
            this.setState((prevState)=> ({options:prevState.options.concat(option)}));
          
        }
handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter(
            (option) => {
                return optionToRemove !== option;
            }
        )
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
            </div>
        )
    }
}

IndecisionApp.defaultProps={
    options:[]
}

const Header=(props) => {
return (
            <div>
            <h1>{props.title}</h1>
         {props.subtitle&&   <h2>{props.subtitle}</h2>}
            </div>
        );
}
Header.defaultProps={
title:"Indecision"
}

const Action=(props) => {
     return (
            <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
            </div>
        )
}


const Options=(props)=> {
    return (
        <div>
        <button onClick={props.handleDelete}>Reset</button>
        {props.options.length===0&&<p>Please add the items to get started</p>}
        {         
           props.options.map((option) => (
               <Option
               key={option}
               optionText={option}
               handleDeleteOption={props.handleDeleteOption}
               />
           ))
        }
       </div>
      );
}

const Option=(props)=> {
    return (
        <div>
        
        <ul>
      <li> 
          {props.optionText}
         <button onClick={
             (e)=>{
                 props.handleDeleteOption(props.optionText);
             }}>remove</button>
      </li>
        </ul>
        </div>
        )
}


class AddOption extends React.Component {
        constructor(props) {
            super(props);
            this.handleForm = this.handleForm.bind(this);
            this.state = {
                error: undefined
            }
        }
        handleForm(e) {

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


        ReactDOM.render( < IndecisionApp /> , document.getElementById("root"));
