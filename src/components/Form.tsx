type Props = {
    id: string;
    children: any;
    submit: any
}

export const Form: React.FC<Props> = ({id, children, submit}) => {
    return <form method="post" className="form" id={id} onSubmit={event => {event.preventDefault()}}>
        {children}
    </form>
}
