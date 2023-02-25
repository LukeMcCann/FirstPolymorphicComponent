type TextProps<T extends React.ElementType = 'span'> = {
    as?: T,
    children: React.ReactNode,
} & React.ComponentPropsWithoutRef<T>;

/**
 * Render a polymorphic Text Component.
 * @param as - The type of component to render, defaults to span
 * @param children - The children to render within the component
 * @returns The constructed Text component
 */
const Text = <T extends React.ElementType = 'span'> ({
    as,
    children,
    ...attributes
}: TextProps<T>) => {
    const Component = as || 'span';
    return <Component {...attributes}>{children}</Component>;
};

export default Text;