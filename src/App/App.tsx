import React from 'react';
import Text from './Text';

const App = () => (
  <div role="application">
    <Text>Hello World</Text>
    <Text as="h1">Hello World</Text>
    <Text as="h2">Hello World</Text>
    <Text as="a" href="https://google.com">Magic Link!</Text>
  </div>
);

export default App;
