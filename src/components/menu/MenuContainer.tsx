import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { SetSort, SetFilter, SetSearchTerm } from '@/store/ducks/product/actions';
import { getProducs, getFilterId, getSortId, getSearchTerm } from '@/store/ducks/product/selector';
import { IProduct } from '@/interfaces/IProduct';
import { ShowModal } from '@/store/ducks/settings/actions';
import Wrapper from '@/components/shared/layouts/Wrapper';
import GridList from '@/components/shared/grids/GridList';
import Container from '@/components/shared/layouts/Container';
import Block from '@/components/shared/layouts/Block';
import ModalBottomSheet from '@/components/shared/buttons/modals/ModalBottomSheet';
import MenuFilter from './presentational/MenuFilter';
import MenuSearch from './presentational/MenuSearch';
import MenuSort from './presentational/MenuSort';
import MenuEmpty from './presentational/MenuEmpty';


const MenuContainer: React.FC = () => {

  const categories: string[] = ['salads', 'snacks', 'meals', 'burgers', 'drinks', 'dessert' ];

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const products:IProduct[] = useSelector(getProducs);
  const filterId:string = useSelector(getFilterId);
  const sortId:string = useSelector(getSortId);
  const searchTerm:string = useSelector(getSearchTerm);

  const onProductClicked = (productSku:string) => {
    navigation(`/product/${productSku}`)
  }
  
  const onSearchChanged = (search:string) => {
    dispatch(SetSearchTerm(search));
  }

  const onFilterClicked = (category:string) => {
    dispatch(SetFilter(category));
  }

  const onOpenSortClicked = () => {
    dispatch(ShowModal({ show:true }));
  }

  const onSortClicked = (sort:string) => {
    dispatch(SetSort(sort));
    dispatch(ShowModal({ show:false }));
  }
    

  return (
    <Wrapper>
      <Container>
        <MenuSearch
          sortId={sortId}
          searchTerm={searchTerm}
          changed={onSearchChanged}
          sorted={onOpenSortClicked}
        />
      </Container>

      {
        products.length === 0 &&
        <Container>
          <MenuEmpty />
        </Container>
      }
      {
        products.length > 0 &&
        <div>
          <Container>
            <MenuFilter
              categories={categories}
              filterId={filterId}
              clicked={onFilterClicked}
            />
          </Container>

          <Container>
            <Block>
              <GridList
                products={products}
                clicked={onProductClicked}
              />
            </Block>
          </Container>
        </div>
      }
    
      <ModalBottomSheet title="Sort Products">
        <MenuSort sortId={sortId} clicked={onSortClicked} />
      </ModalBottomSheet>

    </Wrapper>
    
  )
}

export default MenuContainer;