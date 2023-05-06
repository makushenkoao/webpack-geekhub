export interface ICurrentUser {
  id: number;
  username: string;
  email: string;
}

export interface ICurrentUserSchema {
  authData: ICurrentUser;
}
