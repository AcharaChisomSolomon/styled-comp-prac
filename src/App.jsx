import styled from "styled-components"

const Button = styled.button`
  background: ${props => props.$primary ? "#bf4f74" : "white"};
  color: ${props => props.$primary ? "white" : "#bf4f74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`

function App() {

  return (
    <div>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
    </div>
  )
}

export default App
