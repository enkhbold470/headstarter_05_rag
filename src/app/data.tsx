export const userData = [
  {
    id: 1,
    avatar: "/User1.png",
    messages: [
      {
        id: 1,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "Hey, Jakob",
      },
      {
        id: 2,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "Hey!",
      },
      {
        id: 3,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "How are you?",
      },
      {
        id: 4,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "I am good, you?",
      },
      {
        id: 5,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "I am good too!",
      },
      {
        id: 6,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "That is good to hear!",
      },
      {
        id: 7,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "How has your day been so far?",
      },
      {
        id: 8,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message:
          "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      },
      {
        id: 9,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "I had a relaxing day. Just catching up on some reading.",
      },
      {
        id: 10,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "I've been thinking about you all day...",
      },
      {
        id: 11,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "I am good, you?",
      },

      {
        id: 12,
        avatar: "/User1.png",
        name: "Jane Doe",
        message:
          "You know, I've been thinking about how great we would be together...",
      },
      {
        id: 13,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "I can't help but feel drawn to you.",
      },
      {
        id: 14,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "I am good, you?",
      },
      {
        id: 14,
        avatar: "/User1.png",
        name: "Jane Doe",
        message:
          "There's something about you that makes me feel a little wild.",
      },
      {
        id: 15,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "I find myself daydreaming about us in more intimate moments.",
      },
      {
        id: 11,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "I am good, you?",
      },
      {
        id: 16,
        avatar: "/User1.png",
        name: "Jane Doe",
        message: "What do you think about exploring a deeper connection?",
      },
      {
        id: 17,
        avatar: "/User1.png",
        name: "Jane Doe",
        message:
          "I can't help but wonder how passionate things could get between us.",
      },
      {
        id: 18,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "Are you scam?",
      },
      {
        id: 19,
        avatar: "/User1.png",
        name: "Jane Doe",
        message:
          "I can't help but wonder how passionate things could get between us.",
      },
    ],
    name: "Jane Doe",
  },
  {
    id: 2,
    avatar: "/User2.png",
    name: "John Doe",
    messages: [
      {
        id: 1,
        avatar: "/User2.png",
        name: "John Doe",
        message: "Hey, Jakob",
      },
    ],
  },
  {
    id: 3,
    avatar: "/User3.png",
    name: "Elizabeth Smith",
    messages: [
      {
        id: 1,
        avatar: "/User3.png",
        name: "Elizabeth Smith",
        message: "Hey, Jakob",
      },
    ],
  },
  {
    id: 4,
    avatar: "/User4.png",
    name: "John Smith",
    messages: [
      {
        id: 1,
        avatar: "/User4.png",
        name: "John Smith",
        message: "Hey, Jakob",
      },
    ],
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
