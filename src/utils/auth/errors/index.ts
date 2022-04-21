import { AuthErrorCodes } from 'firebase/auth';

export const ErrorCodeToMessage = (code: string): string | null => {
  switch (code) {
    case AuthErrorCodes.NETWORK_REQUEST_FAILED:
      return 'Network error!';
    case AuthErrorCodes.USER_DELETED:
      return 'The input gmail is not registed!';
    case AuthErrorCodes.INVALID_PASSWORD:
      return 'Wrong password!';
    case AuthErrorCodes.EMAIL_EXISTS:
      return 'Email already exist!';
  }

  return null;
};
