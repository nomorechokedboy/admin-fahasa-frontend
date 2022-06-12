export default interface Review {
  readonly id: string;
  userName: string;
  bookName: string;
  stars: number;
  content: string;
  date: string;
}
