export class UserInfo {
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
export class UserCompanyInfo {
  hasOnBoarded: boolean = false;
  onboardingStep?: number;
  _id: string = "";
  name: string = "";
  industry: string = "";
  userLimit?: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
export type UserInfoType = {
  data: UserInfo | null;
  isLoading: boolean;
  hasError: string | null;
};
export type UserCompanyInfoType = {
  data: UserCompanyInfo | null;
  isLoading: boolean;
  hasError: string | null;
};
export class UserModal {
  info: UserInfoType = {
    data: null,
    isLoading: false,
    hasError: null,
  };
  companyInfo: UserCompanyInfoType = {
    data: null,
    isLoading: false,
    hasError: null,
  };
}
