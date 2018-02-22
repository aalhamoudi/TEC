import { Styled, StyledComponent, Style } from '../Styles/Styled';

export interface TypographyProps {
    variant?: string
}

let variants = {
    default: {

    },
    title: {
        fontWeight: 'bold'
    }
};

@Styled<TypographyProps>('span')
export default class Typography extends StyledComponent<TypographyProps, any> {
    static style = (theme, props): Style => {
        if (theme.Typography) 
            return props.variant? theme.Typography[props.variant] || variants[props.variant] : theme.Typography['default'] || variants['default']
        else
            return props.variant? variants[props.variant] : variants['default']
    };

    
    render() {
        return (
            this.props.children
        );
  }
}
