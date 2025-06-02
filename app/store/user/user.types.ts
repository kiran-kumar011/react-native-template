export interface User {
  name: string;
  age: number;
  contactNo: number;
}

export interface UserActions {
  updateAge: (age: string) => void;
  updateContact: (contact: number) => void;
  setUserInfo: (user: User) => void;
}
