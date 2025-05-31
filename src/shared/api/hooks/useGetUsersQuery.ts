import { useQuery } from '@tanstack/react-query';

import { getUsers, GetUsersParams } from '../requests';

export const useGetUsersQuery = (
  params: GetUsersParams,
  settings?: QuerySettings<typeof getUsers>
) =>
  useQuery({
    queryKey: ['getUsers'],
    queryFn: () => getUsers({ config: settings?.config, params }),
    ...settings?.options
  });
