import { instance } from '@/shared/api/instance';

export type PostUserCreateConfig = RequestConfig<CreateUserRequestDto>;

export const postUserCreate = ({ config, params }: PostUserCreateConfig) =>
  instance.post<UsersResponseDto>('user/create', params, config);
