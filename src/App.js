import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/students" component={StudentPage} />
          <Route exact path="/teachers" component={TeacherPage} />
          <Route exact path="*" render={() => <div>Not Found!</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
