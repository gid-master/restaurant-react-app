import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '@/interfaces/IUser';
import { IProduct } from '@/interfaces/IProduct';
import { getUser } from '@/store/ducks/user/selector';
import { getPromotions, getSuggestions, getOffers } from '@/store/ducks/product/selector';
import GridRow from '@/components/shared/grids/GridRow';
import Container from '@/components/shared/layouts/Container';
import Wrapper from '@/components/shared/layouts/Wrapper';
import ModalBottomSheet from '@/components/shared/buttons/modals/ModalBottomSheet';
import { useNavigate } from 'react-router';
import { ShowModal, ShowInstall } from '@/store/ducks/settings/actions';
import HomeShortcut from './presentational/HomeShortcut';
import HomeIntro from './presentational/HomeIntro';
import HomeCopyRights from './presentational/HomeCopyRights';




const HomeContainer: React.FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  const user:IUser = useSelector(getUser);
  const promotions:IProduct[] = useSelector(getPromotions);
  const suggestions:IProduct[] = useSelector(getSuggestions);
  const offers:IProduct[] = useSelector(getOffers);
  

  const onSeeMoreClicked = () => {
    console.log('redirect to menu');
  }

  const onProductClicked = (productSku:string) => {
    console.log(`rproduct clicked => ${  productSku}`);
  }
  
  const onShortcutClicked = (shortcut:string) => {
    switch (shortcut) {
      case 'account':
        navigation('/account')
        break;
      case 'menu':
        navigation('/menu')
        break;
      case 'install':
        dispatch(ShowInstall(true));
        break;
      case 'about':
        dispatch(ShowModal({ show: true }));
        break;
    }
  }

  return (
    <Wrapper>
      
      <Container>
        <HomeIntro user={user} />
      </Container>
  
      <Container>
        <HomeShortcut clicked={onShortcutClicked} />
      </Container>
  
      <Container title="Promotions" link="see more" clicked={onSeeMoreClicked}>
        <GridRow
          products={promotions}
          type="cover"
          clicked={onProductClicked}
        />
      </Container>
  
      <Container title="Suggestions" link="see more" clicked={onSeeMoreClicked}>
        <GridRow
          products={suggestions}
          type="vertical"
          clicked={onProductClicked}
        />
      </Container>
  
      <Container title="Special offers" link="see more" clicked={onSeeMoreClicked}>
        <GridRow
          products={offers}
          type="horizontal"
          clicked={onProductClicked}
        />
      </Container>


      <ModalBottomSheet title="Non-Commercial Use">
        <HomeCopyRights />
      </ModalBottomSheet>
  
    </Wrapper>

  )
}

export default HomeContainer;