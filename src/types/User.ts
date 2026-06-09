export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  accountType: "user" | "admin";
}