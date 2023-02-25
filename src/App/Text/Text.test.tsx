import { render, screen } from '@testing-library/react';
import Text from "./Text";

test('Renders a Text component as a span by default.', () => {
    render(<Text>Should be a span element.</Text>);
    const spanElement = screen.getByText(/.*span.*/);
    expect(spanElement.tagName).toBe('SPAN');
});

test('Renders a Text component as the correct component when specified.', () => {
    render(<Text as="h1">Should be a h1 element.</Text>);
    render(<Text as="h2">Should be a h2 element.</Text>);
    render(<Text as="h3">Should be a h3 element.</Text>);
    render(<Text as="h4">Should be a h4 element.</Text>);
    render(<Text as="h5">Should be a h5 element.</Text>);
    render(<Text as="h6">Should be a h6 element.</Text>);
    render(<Text as="p">Should be a p element.</Text>);
    render(<Text as="div">Should be a div element.</Text>);

    const heading1Element = screen.getByText(/.*h1.*/);
    const heading2Element = screen.getByText(/.*h2.*/);
    const heading3Element = screen.getByText(/.*h3.*/);
    const heading4Element = screen.getByText(/.*h4.*/);
    const heading5Element = screen.getByText(/.*h5.*/);
    const heading6Element = screen.getByText(/.*h6.*/);
    const paragraphElement = screen.getByText(/.*p.*/);
    const divElement = screen.getByText(/.*div.*/);

    expect(heading1Element.tagName).toBe('H1');
    expect(heading2Element.tagName).toBe('H2');
    expect(heading3Element.tagName).toBe('H3');
    expect(heading4Element.tagName).toBe('H4');
    expect(heading5Element.tagName).toBe('H5');
    expect(heading6Element.tagName).toBe('H6');
    expect(paragraphElement.tagName).toBe('P');
    expect(divElement.tagName).toBe('DIV');
});

test('Renders a component correctly when utilising custom components', () => {
    const Highlight = ({ children }: { children: React.ReactText}) => (
        <em style={{ background: 'yellow', color: 'black'}}>{children}</em>
    );

    render(<Text as={Highlight}>Should use a custom component in render.</Text>);

    const customComponent = screen.getByText(/.*custom.*/);

    expect(customComponent).toHaveStyle('background: yellow; color: black');
    expect(customComponent.tagName).toBe('EM');
});

test('Renders a component correctly when passing additional attributes.', () => {
    render(<Text color="violet" style={{background: 'black'}}>Should use a custom style and color.</Text>);

    const textComponent = screen.getByText(/.*style and color.*/);

    expect(textComponent).toHaveStyle('color: violet; background: black');
});