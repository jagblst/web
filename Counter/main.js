const App  = (props) => {
  const [counter, setCounter] = React.useState(props.counter)
  
  const incCounter = () => {
     if (counter < 50) {
    setCounter (counter => counter + 1)}
  }  
  
   const decCounter = () => {
       if (counter > 50) {
    setCounter(counter => counter - 1)}
  }
  
  const rndCounter = () => {
  setCounter(Math.floor(Math.random() * (50 - (-50 + 1)) -50))
  }
  
  const resetCounter = () => {
    setCounter(props.counter)
  }
  
    
    return (
      <div class="app">
        <div class="counter">{counter}</div>
        <div class="controls">
          <button onClick={incCounter} >INC</button>
          <button onClick={decCounter} >DEC</button>
          <button onClick={rndCounter} >RND</button>
          <button onClick={resetCounter}>RESET</button>
        </div>
      </div>
    )
}


ReactDOM.render(<App counter={0}/>, document.getElementById('app'));
