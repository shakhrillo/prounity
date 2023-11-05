// App.tsx
import './App.css';
import { MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Shakhrillo" last="Name" />
    </div>
  );
}

export default App;