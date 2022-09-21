import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Container, Meals } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Percent 
        title= '90,86%'
        subtitle='das refeições dentro da dieta'
        type='PRIMARY'
      />

      <Meals>
        Refeições
      </Meals>

      <Button 
        title='Nova refeição'
        type='PRIMARY'
      />
    </Container>
  );
}

