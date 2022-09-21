import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    subtitle: string,
    type: ButtonTypeStyleProps,
}

export function Percent({ title, subtitle, type, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            
            <Title>
                {title}
            </Title>

            <Subtitle>
                {subtitle}
            </Subtitle>

        </Container>
    )
}