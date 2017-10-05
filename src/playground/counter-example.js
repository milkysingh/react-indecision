class Counter extends React.Component {
  constructor(props) {
super(props);
this.handleAddOne = this.handleAddOne.bind(this);
this.handleSubOne = this.handleSubOne.bind(this);
this.handlReset = this.handlReset.bind(this);
this.state = {
    count: props.count
}
}
componentDidMount() {
    try {
        const json=localStorage.getItem('count');
        const count=JSON.parse(json);
        if(count) {
            this.setState(()=>({count}));
        }
    } catch (error) {
        
    }
}

componentDidUpdate(prevProps,prevState) {
    if(prevState.count!==this.state.count) {
        const json=JSON.stringify(this.state.count);
        const count=localStorage.setItem("count",json);
    }
}

handleAddOne() {
    this.setState((prevState) => {
        return {
            count: prevState.count + 1
        }
    });
}


handleSubOne() {
    this.setState((prevState) => {
        return {
            count: prevState.count - 1
        }
    });
}

handlReset() {
    this.setState(() => {
        return {
            count: 0
        }
    })
}
render() {
        return (
            <div> 
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleSubOne}>-1</button>
            <button onClick={this.handlReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps={count:0}
ReactDOM.render(<Counter/>,document.getElementById("root"));
