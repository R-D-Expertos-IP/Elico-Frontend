export interface IUser {
  id: number;
  name: string;
  email: string;
  mobile: number;
  idRole: number;
  state: number;
  idBusinessAccount: number;
  zones: string;
  inHouse: number;
  position: string;
  idClient: number;
  idBusinessGroup: number;
  checkGroup: boolean;
  checkClient: boolean;
  image: string
  selectedTTA?: boolean;
  selectedPTA?: boolean;


}

