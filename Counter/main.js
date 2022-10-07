class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: this.props.count
      }
    }
    
    inc = () => {
      this.setState(state => ({
        count: state.count + 1
      }))
    }  
    
     dec = () => {
      this.setState(state => ({
        count: state.count - 1
      }))
    }
    
    rnd = () => {
      this.setState({
      count:  Math.floor(Math.random() * (50 - (-50 + 1)) -50)
      })
    }
    
    reset = () => {
      this.setState({
      count: this.props.count
    })
    }
    
    render() {
       const {count} = this.state;
      
      return (
        <div class="app">
          <div class="counter">{count}</div>
          <div class="controls">
            <button onClick={this.inc} >INC</button>
            <button onClick={this.dec} >DEC</button>
            <button onClick={this.rnd} >RND</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App count={0}/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов