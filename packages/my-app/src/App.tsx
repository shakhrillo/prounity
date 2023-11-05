// App.tsx
import './App.css';
import { MyComponent, PuToolbar, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Shakhrillo" last="Name" />
      <PuToolbar>OK</PuToolbar>
    </div>
  );
}

export default App;