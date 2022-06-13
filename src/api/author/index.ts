import axiosClient from '@/lib/axiosClient';

export const getAllAuthor = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

export const createAuthor = (authorName: string) =>
  axiosClient.post('/author', { name: authorName }).then((res) => res.data);
