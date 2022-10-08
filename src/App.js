import "./App.css";
// import User from './User';  // To show the working of props
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <User data={{ name: 'Madaan Sahaab', age: '21' }} /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
