import react, {useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    const increment = () =>{
        setCount(count+1);
    };
    const decrement = () =>{
        if(count>0)
        {

        setCount(count-1)

    }
};
return(
    <div>
        <h1>Counter</h1>
        <p>Increase: nothing{count}</p>
        <button onClick={increment}>+</button>  
        <button onClick={decrement}>-</button>
    </div>
);
}
export default Counter;