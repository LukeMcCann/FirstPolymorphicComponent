import React, { useRef } from 'react';
import Text from './Text';

const Emphasis = ({ children }: { children: React.ReactText}) => (
  <em style={{background: 'red', color: 'black'}}>{children}</em>
);

const App = () => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  return (
    <div role="application">
      <Text>Hello World</Text>
      <Text as="h1" ref={ref}>Hello World</Text>
      <Text as="h2">Hello World</Text>
      <Text as="a" href="https://google.com">Magic Link!</Text>
      <br />
      <Text>Test</Text>
      <br />
      <Text as={Emphasis}>Emphasised Text</Text>
      <br />
      <Text color="violet" style={{background: 'black'}}>Color Test</Text>
    </div>
  );
};

export default App;
