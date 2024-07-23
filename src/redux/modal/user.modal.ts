class UserInfo {
  _id: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  companyId?: string = "";
  userType: string = "";
  createdAt: Date | null = null;
  updatedAt: Date | null = null;
  __v?: number;
}
export class UserModal {
  info: UserInfo = new UserInfo();
}
