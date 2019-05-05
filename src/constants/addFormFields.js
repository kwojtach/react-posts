// @flow

type Fields = Array<{
  type:  string,
  name:  string,
  label: string
}>

export const newPostFields : Fields = [
  {type: 'text',     name: 'title', label: 'Title'},
  {type: 'textarea', name: 'body',  label: 'Body'}
];

export const newCommentFields : Fields = [
  {type: 'text',     name: 'name',  label: 'Name'},
  {type: 'email',    name: 'email', label: 'Email'},
  {type: 'textarea', name: 'body',  label: 'Body'}
];
