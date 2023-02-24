interface TextProps {
    as?: any,
    children: React.ReactNode,
};

/**
 * Render a polymorphic Text Component.
 * @param as - The type of component to render, defaults to span
 * @param children - The children to render within the component
 * @returns The constructed Text component
 */
const Text = ({
    as,
    children
}: TextProps) => {
    const Component = as || 'span';
    return <Component>{children}</Component>;
};

export default Text;