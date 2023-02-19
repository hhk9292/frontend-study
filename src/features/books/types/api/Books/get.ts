export const url = '/somwhere/to/get/books';
export const method = 'GET';

export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
}

export interface Request {
  page: number;
  itemsPerPage: number;
  title?: string;
  author?: string;
  genre?: string;
}

export interface Response {
  page: number;
  totalPages: number;
  totalBooks: number;
  books: IBook[];
}
