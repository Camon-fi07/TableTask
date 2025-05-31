import type { AxiosError } from 'axios';
import { toast } from 'sonner';

export const errorInterceptor = (error: AxiosError) => {
  toast.error(`Произошла ошибка ${error.code}`);

  return Promise.reject(error);
};
