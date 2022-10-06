import {Component, StrictMode} from 'react';
import './App.css';

function WhoAmI ({name, surname, link}) {
  return(
    <div>
      <h1>My name is {name}, surname{surname} - </h1>
      <a href={link}>My profile</a>
    </div>
  )
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
