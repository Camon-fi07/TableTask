import { useIsMobile } from '@/shared/hooks/useIsMobile';

import { UsersMobile } from './user.mobile';
import { UsersDesktop } from './users.desktop';

export const Users = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <UsersDesktop />}
      {isMobile && <UsersMobile />}
    </>
  );
};
