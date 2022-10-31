export interface User {
    _id: { $oid: string };
    name: string;
    surname: string;
    email: string;
  }