import React from 'react';
import Text from './Text';

const Emphasis = ({ children }: { children: React.ReactText}) => (
  <em style={{background: 'red', color: 'black'}}>{children}</em>
);

const App = () => (
  <div role="application">
    <Text>Hello World</Text>
    <Text as="h1">Hello World</Text>
    <Text as="h2">Hello World</Text>
    <Text as="a" href="https://google.com">Magic Link!</Text>
    <br />
    <Text>Test</Text>
    <br />
    <Text as={Emphasis}>Emphasised Text</Text>
  </div>
);

export default App;
