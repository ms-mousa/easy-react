// I hated having to write down the return type on every component
// extracted it away
export type ReactComponentType<T> = (props: T) => JSX.Element;
