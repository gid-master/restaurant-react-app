import React from 'react';
import './styles.scss';
import { IUser } from '@/interfaces/IUser';

type HomeIntroProps = {
  user?:IUser
}

const HomeIntro: React.FC<HomeIntroProps> = (props: HomeIntroProps) =>(
  <div className="home-intro">
    <img src={require('@/assets/logo.png').default} alt="Restaurant" />
    {props.user && <h1>Hey, { props.user.name }</h1>}
    {!props.user && <h1>Welcome</h1>}
    <span>What do you feel like today ?</span>
  </div>
)

export default HomeIntro;