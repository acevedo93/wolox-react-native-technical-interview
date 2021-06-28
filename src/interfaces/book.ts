export interface IBook {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image_url: null | string;
  comments?: IComment[];
}

export interface IComment {
  id: number;
  author: string;
  comment: string;
}
