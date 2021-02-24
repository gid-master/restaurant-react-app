import { IResponse } from '@/interfaces/IResponse';
import { IUser } from '@/interfaces/IUser';

export const USER_MOCK: IResponse<IUser> = {
  success: true,
  data: {
    id: '6005aa690f7cd41e6bbacafe',
    name: 'User Mock',
    email: 'usermock@restaurant.com',
    token: 'JHKJDGI632HKJHDKJS',
  },
};
