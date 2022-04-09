import { AuthErrorCodes } from "firebase/auth";

export const codeToMessage = (code: string): string => {
    switch (code) {
        case AuthErrorCodes.NETWORK_REQUEST_FAILED:
            return "Network error!";
        case AuthErrorCodes.USER_DELETED:
            return "The input gmail is not registed!";
        case AuthErrorCodes.INVALID_PASSWORD:
            return "Wrong password!";
    }

    return "Internal Error!";
};
