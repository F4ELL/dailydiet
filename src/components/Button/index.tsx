import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

type Props = TouchableOpacityProps & {
    title: string,
    type: ButtonTypeStyleProps,
}

export function Button({ title, type, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            
        <Title
            type={type}
        >
            {title}            
        </Title>

        </Container>
    )
}