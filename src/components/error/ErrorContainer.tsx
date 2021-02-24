import React from 'react';
import Wrapper from '@/components/shared/layouts/Wrapper';
import Container from '@/components/shared/layouts/Container';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ErrorNotFound from './presentational/ErrorNotFound';
import ErrorServer from './presentational/ErrorServer';
import ErrorUnauthorized from './presentational/ErrorUnauthorized';
import ErrorUnexpected from './presentational/ErrorUnexpected';

const ErrorContainer: React.FC = () => {

  const navigation = useNavigate();
  const { id } = useParams();

  const onGoBackClicked = () => {
    navigation('/');
  };

  return (
    <Wrapper>
      <Container>
        {id === '404' && <ErrorNotFound />}
        {id === '500' && <ErrorServer />}
        {id === '401' && <ErrorUnauthorized />}
        {id !== '404' && id !== '500' && id !== '401' && <ErrorUnexpected />}
      </Container>
      <Container>
        <ButtonStandard
          icon="store"
          name="Go back to home"
          center={true}
          clicked={onGoBackClicked}
        />
      </Container>
    </Wrapper>
  )
}

export default ErrorContainer;