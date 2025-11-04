export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  fullName?: string;
};

export type AuthResponse = {
  token: string;
  user?: {
    id: number;
    email: string;
    fullName?: string;
  }
};
