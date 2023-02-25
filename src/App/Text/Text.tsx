type Rainbow =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet'

type TextProps<T extends React.ElementType> = {
    as?: T,
    color?: Rainbow | 'black',
};

type Props<T extends React.ElementType> = React.PropsWithChildren<TextProps<T>> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>

/**
 * Render a polymorphic Text Component.
 * @param as - The type of component to render, defaults to span
 * @param children - The children to render within the component
 * @returns The constructed Text component
 */
const Text = <T extends React.ElementType = 'span'> ({
    as,
    style,
    color,
    children,
    ...attributes
}: Props<T>) => {
    const Component = as || 'span';
    const internalStyles = color ? { style: { ...style, color }} : {};
    return <Component {...attributes} {...internalStyles}>{children}</Component>;
};

export default Text;