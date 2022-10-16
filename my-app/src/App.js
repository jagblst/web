import {Component, Fragment} from 'react';
import styled from 'styled-components'
import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
      display: block;
      margin: 10px 0 10px 0;
      color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
  `;

const HeaderStyled = styled.h2`
  font-size: 22px;
  `;  

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <HeaderStyled>My name is {name}, 
            surname - {surname}, 
            age - {years}, 
            position - {position}</HeaderStyled>
        <a href={link}>My profile</a>
        <form>
            <span>Введіть посаду</span>
            <input type="text" onChange={(e) => this.comitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
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

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  `;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="twitter.com"/>
     <Header/> 
      <Field/>
      <Btn/>   
    </Wrapper>
  );
}

export {Header};
export default App;
