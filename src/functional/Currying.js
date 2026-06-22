function Currying(){
    const add=(a)=>(b)=>a+b;
    return (<>
    <h3>Currying:</h3>
    Addition: {add(1)(6)}
    </>);
}
export default Currying;