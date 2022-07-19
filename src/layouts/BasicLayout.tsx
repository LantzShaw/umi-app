type BasicLayoutProps = {
    children: React.ReactNode;
}

export default function BasicLayout(props: BasicLayoutProps) {
    return <div>{props.children}</div>;
}