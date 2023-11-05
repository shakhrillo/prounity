// App.tsx
import './App.css';
import { MyComponent, PuAccordion, PuIcon, PuImg, PuToolbar, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Shakhrillo" last="Name" />
      {/* <PuToolbar>OK</PuToolbar>
      <PuIcon>icon</PuIcon>
      <PuAccordion>Test accordion</PuAccordion> */}
      <PuImg src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"></PuImg>
    </div>
  );
}

export default App;