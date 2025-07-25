
/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

/*
Interface for the Login Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  token: string;
  // refreshToken: RefreshToken;
  // tokenType: string;
}

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  login: string;
  password: string;
}

/*
Interface for the Register Request (can look different, based on your backend api)
*/
export interface RegisterRequest {
  login: string;
  password: string;
  email: string;
  nome: string;
  sobrenome: string;
}

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface RegisterResponse {
  status: number;
  message: string;
}
