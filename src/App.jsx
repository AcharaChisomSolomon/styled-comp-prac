/* eslint-disable react/prop-types */
import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`

const ReverseButton = ({ children, ...props }) => (
  <Button {...props}>
    {children.split('').reverse()}
  </Button>
);

function App() {
  return (
    <div>
      <Button as="a" href="#">Normal</Button>
      <Button as={ReverseButton}>
        Custom Button with Normal Button styles
      </Button>
    </div>
  );
}

export default App
