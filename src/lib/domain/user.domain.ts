export type User = {
  firstName: string;
  lastName: string;
  email: string;
  credits: number;
};

let user: User = {
  firstName: 'Juan',
  lastName: 'Linares',
  email: 'jlinaresmedalla@email.com',
  credits: 0,
};

export const getUser = () => user;

export const setUser = (data: Partial<User>) => {
  user = { ...user, ...data };
};

export const addCreditsToUser = (amount: number) => {
  user.credits += amount;
};
