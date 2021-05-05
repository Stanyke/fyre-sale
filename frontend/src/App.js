import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import AmazonRegistrationPage from './components/AmazonRegistrationPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={AmazonRegistrationPage} />
      </div>
    </Router>
  );
}

export default App;
