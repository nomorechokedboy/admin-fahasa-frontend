export default interface Employee {
  readonly _id: string;
  readonly uid: string;
  fullName: string;
  image: string;
  types: string;
  address: string;
  phoneNumber: string;
  gender: string;
  birthdate: Date;
  email: string;
  salary: number;
}
