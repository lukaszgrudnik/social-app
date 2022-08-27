export interface Comment {
  id: string
  author: {
    id: string,
    name: string,
    surname: string,
    avatar: string
  }
  date: string,
  content: string,
  subComments: Comment[]
}
