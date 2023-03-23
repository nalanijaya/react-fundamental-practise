function FunctionEvent(){
    function handleClick(){
        console.log("Test success");
    }
    return (<div> Functional Component
        <button onClick={ handleClick}>Click here</button>
    </div>)
}
export default FunctionEvent;