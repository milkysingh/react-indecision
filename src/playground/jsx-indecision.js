console.log("App.js is runnig..");

//JSX JavaScript...
const temp={
    title:"Indecision App",
    subtitle:"Let the computer decides for you",
    options:[]
}
const fun2=(st)=>{
return st?true:false;
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option=e.target.elements.input.value;
    if(option) {
        temp.options.push(option);
        e.target.elements.input.value='';
        renderDom();
    }
 
   
}

const reset= () => {
    temp.options=[];
    renderDom();
}
const pickOption = () => {
    const random=Math.floor(Math.random()*temp.options.length);
    alert(temp.options[random]);
}
const renderDom = () => {
    const template1= (
        <div>

        <h1>{temp.title}</h1>

        {fun2(temp.subtitle)?<p>{temp.subtitle}</p>:''}

       <button disabled={!temp.options.length} onClick={pickOption}>What should I do?</button>
        <button className="button"onClick={reset}>reset</button>
            <ol>
            {
            temp.options.map( (option) =>  <li key={option}> {option}</li>)
            }
           </ol>


        <form onSubmit={onFormSubmit}>
        <input type="text" name="input"/>
        <button>Add option</button>
        </form>
    
        </div>
    )
    ReactDOM.render(template1,document.getElementById('root'))
}

renderDom();