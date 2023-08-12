import { useMutation } from '@tanstack/react-query';
import { loginUserAPI } from '..';
import { useAuthStore } from '@/hooks/store/useAuthStore';
import { useRouter } from 'next/router';

interface IuseLogin {
  successfulRedirect?: string;
}

export const useLogin = ({ successfulRedirect = '/app' }: IuseLogin) => {
  const router = useRouter();

  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation(loginUserAPI, {
      onSuccess: (data) => {
        router.push(successfulRedirect);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  return { callLogin: mutateAsync, isLoading, isError, error };
};
