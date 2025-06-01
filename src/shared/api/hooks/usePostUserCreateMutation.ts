import { useMutation } from '@tanstack/react-query';

import { postUserCreate, PostUserCreateConfig } from '../requests';

export const usePostUserCreateMutation = (
  settings?: MutationSettings<PostUserCreateConfig, typeof postUserCreate>
) =>
  useMutation({
    mutationKey: ['postUserCreate'],
    mutationFn: ({ params, config }) =>
      postUserCreate({
        params,
        config: { ...settings?.config, ...config }
      }),
    ...settings?.options
  });
