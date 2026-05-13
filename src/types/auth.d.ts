declare namespace Auth {
  import('enums/auth');
  import { GenderEnum } from 'enums/auth';

  interface User {
    id: string;
    email: string;
    phoneNumber: string;
    phoneCode: string;
    username: string;
    fullName: string;
    gender: GenderEnum;
    avatarId: string;
    avatar: Media.MediaInfo;
    location?: Location;
    countryCode: string;
    isCompleted: boolean;
    bio: string;
    bornAt: string;
    updatedAt: string;
    setting: Setting;
    latestLoginAt: string;
  }

  interface Setting {
    id: string;
    userId: string;
    hotspotVisibility: boolean;
  }

  interface UserProfile extends User {
    favoriteHashtags: string[];
    favoriteTopics: TopicManagement.Topic[];
    followerIds: string[];
    followingIds: string[];
  }

  type Location = {
    longitude: number;
    latitude: number;
    address: string;
    city: string;
    state: string;
    postcode: string;
    countryCode: string;
    name: string;
  };

  type TokenInfo = {
    accessToken: string;
    refreshToken: string;
    expireAt: string;
    refreshExpireAt: string;
  };

  interface UserAuthentication {
    token: TokenInfo;
    user: User;
  }

  type UserData = {
    user: User;
    accessToken: string;
  };

  type PhoneInfo = {
    phoneCode: string;
    phoneNumber: string;
  };

  type EmailInfo = { email: string };

  type AccountTypes = PhoneInfo | EmailInfo | { username: string };

  type UserCertificate = AccountTypes & {
    password: string;
  };

  type RequestLocation = Omit<Location, 'address' | 'name'> & {
    isFromIp: boolean;
  };

  type LoggedAccount = SignUpAccount & {
    username: string;
    avatar: string;
    refreshToken: string;
  };

  type SignUpAccount = PhoneInfo | EmailInfo;

  type SignUpOTPVerification = SignUpAccount & { username: string };

  type SignUpSubmission = SignUpOTPVerification & { password: string };

  interface SignUpParams extends SignUpSubmission {
    otpId: string;
  }

  interface OTPVerification extends SignUpAccount {
    token: string;
  }

  interface ForgotPasswordSubmission extends SignUpAccount {
    otpId: string;
  }

  interface ForgotPasswordParams extends ForgotPasswordSubmission {
    password: string;
  }

  interface LogoutParams {
    accessToken: string;
    refreshToken: string;
  }
}
