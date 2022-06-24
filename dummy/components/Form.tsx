type Props = {
    id: string;
    children: any;
    submit: any
}

export const Form: React.FC<Props> = ({id, children, submit}) => {
    return <form method="dialog" className="form" id={id} onSubmit={submit}>
        {children}
    </form>
}
