export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginSchema {
  form: ILoginFormData;
  isLoading: boolean;
  error?: string;
}
