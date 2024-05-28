export interface IAuthCredentialRes {
    apiKey: string
    authDomain: string
    appName: string
    currentUser: CurrentUser
  }
  
  export interface CurrentUser {
    uid: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    providerData: ProviderDaum[]
    stsTokenManager: StsTokenManager
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
  }
  
  export interface ProviderDaum {
    providerId: string
    uid: string
    displayName: any
    email: string
    phoneNumber: any
    photoURL: any
  }
  
  export interface StsTokenManager {
    refreshToken: string
    accessToken: string
    expirationTime: number
  }
  