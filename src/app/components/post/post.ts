import {Comment} from "../comment/comment";

export interface Post {
  id: string,
  author: {
    id: string,
    name: string,
    surname: string,
    avatar: string
  },
  content: string,
  date: string,
  comments: Comment[]
}
