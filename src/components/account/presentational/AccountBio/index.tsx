import React from 'react';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import { IUser } from '@/interfaces/IUser';
import './styles.scss';

type AccountBioProps = {
  user: IUser;
  clicked: () => void;
}

const AccountBio: React.FC<AccountBioProps> = (props:AccountBioProps) =>(
  <div className="account-bio">
    <h2 className="name">{ props.user?.name }</h2>
    <span className="email">{ props.user?.email }</span>

    <ButtonStandard
      name="Logout application"
      center={true}
      clicked={props.clicked}
    />
  </div>
)

export default AccountBio;