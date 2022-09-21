import 'styled-components/native';
import theme from 'src/theme';

declare module 'styled-components' {
    type Themetype = typeof theme;

    export interface DefaultTheme extends Themetype {}
}