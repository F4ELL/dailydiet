import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Highlight 
        title='90,86%'
        subtitle='das refeições dentro da dieta'
      />
    </Container>
  );
}

