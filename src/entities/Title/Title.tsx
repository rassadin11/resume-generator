import { TitleProps } from './Title.props';

const Title = ({children, ...props}: TitleProps) => {
    return (
        <h1 {...props}>{children}</h1>
    );
};

export default Title;