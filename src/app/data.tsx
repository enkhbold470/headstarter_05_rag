export const userData = [
  {
    id: 1,
    avatar: "/logo.svg",
    messages: [
      {
        id: 1,
        avatar: "/logo.svg",
        name: "ProfGuru",
        message:
          "Hey, I am ProfGuru, your personal AI agent for choosing best professors.",
      },
    ],
    name: "ProfGuru",
  },
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  id: 5,
  avatar: "/LoggedInUser.jpg",
  name: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
  id: number;
  avatar: string;
  name: string;
  message: string;
}

export interface User {
  id: number;
  avatar: string;
  messages: Message[];
  name: string;
}
