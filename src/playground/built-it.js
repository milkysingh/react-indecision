class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleIt=this.toggleIt.bind(this);
        this.state={
            visibility:false
        }
    }
    toggleIt() {

        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });


    }
    render() {
        return (
            <div>
            <h1>ToggleVisibility</h1>
            <button onClick={this.toggleIt}>{this.state.visibility?'hide details':'show details'}</button>
            {this.state.visibility?<p>Here are your details</p>:''}
            </div>
        )
    }
}
ReactDOM.render(<ToggleVisibility/>,document.getElementById("root"));


// const options= {
//     visible:false,
//     btntext:["show detail","hide details"]
// }
// const toggleIt=() => {
//   options.visible= options.visible?false:true;

//     render();
// }
// const render= () =>{


// const app=(
//     <div>
//     <h1>
//     Toggel Visiblity
//     </h1>
//     <button onClick={toggleIt}>{options.btntext[options.visible?0:1]}</button>
//     {options.visible?<p>Hey! Here are your details.</p>:''}
//     </div>
// )
// ReactDOM.render(app,document.getElementById("root"));
// }
// render();