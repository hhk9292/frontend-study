import { Books } from '../types/api';

interface Data<T> {
  data: T;
}

const request = <T>(...args: any[]) => {
  return new Promise<Data<T>>((resolve, reject) => {
    resolve({ data: '' } as Data<T>);
  });
};

export const fecthBooks = async (params: Books.GET.Request) => {
  const url = Books.GET.url;
  const method = Books.GET.method;

  const config = {
    url,
    method,
    params,
  };

  try {
    const result = await request<Books.GET.Response>(config);
    return result.data;
  } catch (e: any) {
    //
  }
};
