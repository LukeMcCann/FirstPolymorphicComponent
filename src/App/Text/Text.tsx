type Rainbow =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet'

type AsProp<T extends React.ElementType> = {
    as?: T
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<
    T extends React.ElementType,
    Props = {}
> = Props & AsProp<T> & Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type TextProps = {
    color?: Rainbow | "black",
}
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
}: PolymorphicComponentProps<T, TextProps>) => {
    const Component = as || 'span';
    const internalStyles = color ? { style: { ...style, color }} : {};
    return <Component {...attributes} {...internalStyles}>{children}</Component>;
};

export default Text;