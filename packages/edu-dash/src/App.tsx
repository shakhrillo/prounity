import './App.css'

import { PuAccordion, PuButton, defineCustomElements } from 'react-library';
defineCustomElements();

function App() {
  return (
    <>
      <PuButton>Button</PuButton>
      <PuAccordion>
        <div slot="header">First Accordion</div>
        <div slot="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aspernatur porro alias, nam molestiae vel!</div>
      </PuAccordion>
    </>
  )
}

export default App
