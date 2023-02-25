interface TextProps<T> {
    as?: T,
    children: React.ReactNode,
};

/**
 * Render a polymorphic Text Component.
 * @param as - The type of component to render, defaults to span
 * @param children - The children to render within the component
 * @returns The constructed Text component
 */
const Text = <T extends React.ElementType> ({
    as,
    children
}: TextProps<T>) => {
    const Component = as || 'span';
    return <Component>{children}</Component>;
};

export default Text;