import { instance } from '../../instance';

export interface GetUsersParams {
  _page?: number;
}

export type GetUsersConfig = RequestConfig<GetUsersParams>;

export const getUsers = ({ config, params }: GetUsersConfig) =>
  instance.get<UsersResponseDto>('users', { params, ...config });
