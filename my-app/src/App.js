import {Component, StrictMode} from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  comitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return(
      <div>
        <button onclick={this.nextYear}>+++</button>
        <h1>My name is {name}, 
            surname - {surname}, 
            age - {years}, 
            position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
            <span>Введіть посаду</span>
            <input type="text" onChange={(e) => this.comitInputChanges(e, 'some color')} />
        </form>
      </div>
    )
  }
}

const Header = () => {
  return <h2>Hello World!</h2>
}


// const Field = () => {
//   const holder = 'Enter here'
//   const styledField = {
//     width: '300px'
//   }
//   return <input 
//           placeholder={holder}
//           type="text" 
//           style={styledField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styledField = {
      width: '300px'
    };
    return <input 
          placeholder={holder}
          type="text" 
          style={styledField}/>
  }
}  

function Btn() {
 const text = 'Log in';
 const logged = false;
  // const res = () => {
  //   return 'Log in'
  // }
  // const p = <p>Log in</p>
  return <button>{logged ? 'Enter' : text}</button>
} 

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="twitter.com"/>
     <StrictMode>
     <Header/> 
     </StrictMode>
      <Field/>
      <Btn/>   
    </div>
  );
}

export {Header};
export default App;
