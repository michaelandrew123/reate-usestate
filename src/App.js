import React, {useState} from 'react' 
import './style.css'

//added extension
/*
  simple react snippet by Burke Holland 
  Prettier-Code formatter by Prettier
*/


//Tutorial for useState
//
/*
function countInitial(){  //useState normal // when it trigger it will count repeated
  console.log('run function count initial');
  return 4; 
}
*/
function App() {

  
  
  //const [count, setCount] = useState(4); //useState basic
  //const [count, setCount] = useState(() => countInitial()); //useState normal // when it trigger it will count repeated
  
  
  const [count, setCount] = useState(() => {
    console.log('run function');
    return 4;
  }); //useState intermediate
   
  function decrementCount(){
    //setCount(count - 1); //useState basic
    setCount(prevCount => prevCount - 1); //useState intermediate
  }
  function incrementCount(){
    setCount(nextCount => nextCount + 1);
  }
 
  /*
    another method to use in useState
  */
  // use object in useState

  const [state, setState] = useState({ count: 4, theme: 'blue' })
  const countState = state.count;
  const themeState = state.theme;

 
  function decrementState(){
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 }
    });
  }
  function incrementState(){
    setState(prevState => {
      return {...prevState, count: prevState.count+2, theme: prevState.theme='red'}
    })
  }

  return ( 
      <div className="useStateExample">
          <div className='firstStateExample'>
            <h1>Counter for useState</h1>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
          </div>  

          <div className='secondStateExample'>
            <h1>State for useState</h1>
            <button onClick={decrementState}>-</button><br />
            <span>State Count: {countState} </span><br />
            <span> State: {themeState}</span> <br />
            <button onClick={incrementState}>+</button>
          </div>

      </div>
  );
}

export default App;
