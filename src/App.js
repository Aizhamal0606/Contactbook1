import TodoContextProvider from './contexts/TodoContext';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
      <Routes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
