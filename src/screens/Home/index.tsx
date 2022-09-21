import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Percent 
        title= '90,86%'
        subtitle='das refeições dentro da dieta'
        type='PRIMARY'
      />
    </Container>
  );
}

