import { TouchableOpacityProps } from "react-native";

import { PercentButtonTypeStyleProps, Container, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    subtitle: string,
    type: PercentButtonTypeStyleProps,
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