import { User } from 'firebase/auth';

export default interface BaseUser {
  displayName: string;
  role: string;
  photoURL: string;
  currentUser: User | null;
}
