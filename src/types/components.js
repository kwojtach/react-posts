export type CommentProps = {
  name:    string,
  email:   string,
  body:    string,
  id?:     number,
  postId?: number
};

export type UserPostProps = {
  title:   string,
  body:    string,
  id?:     number,
  userId?: number
}

export type UserProps = {
  name:    string,
  email:   string,
  phone:   string,
  website: string,
  id:      number,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
