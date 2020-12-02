import HomePage from './pages/Home.jsx'
import UseMemoPage from './pages/UseMemoPage.jsx'
import UseCallbackPage from './pages/UseCallbackPage.jsx'
import UseReducerPage from './pages/UseReducerPage.jsx'
import './utils'
function App() {
  return (
    <div className="App">
      <HomePage />
      <UseMemoPage />
      <UseCallbackPage />
      <UseReducerPage />
    </div>
  );
}

export default App;
