import React from 'react';

type Rainbow =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet'

type AsProp<T extends React.ElementType> = {
    as?: T,
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<
    T extends React.ElementType,
    Props = {}
> = Props & AsProp<T> & Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type TextProps = {
    color?: Rainbow | "black",
}

type Props<T extends React.ElementType, P> = PolymorphicComponentProps<T, P>;

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

type PolymorphicComponentPropsWithRef<
    T extends React.ElementType,
    P
> = PolymorphicComponentProps<T, P> & { ref?: PolymorphicRef<T> };

type TextComponent = <T extends React.ElementType> (
    props: PolymorphicComponentPropsWithRef<T, TextProps>
) => React.ReactElement | null;

/**
 * Render a polymorphic Text Component.
 * @param as - The type of component to render, defaults to span
 * @param children - The children to render within the component
 * @returns The constructed Text component
 */
const Text : TextComponent = React.forwardRef(
    <T extends React.ElementType = 'span'> ({
        as,
        style,
        color,
        children,
        ...attributes
    }: Props<T, TextProps>,
     ref?: PolymorphicRef<T>
    ) => {
        const Component = as || 'span';
        const internalStyles = color ? { style: { ...style, color }} : {};
        return (
            <Component {...attributes} {...internalStyles} ref={ref}>
                {children}
            </Component>
        );
    }
);

export default Text;