export class User {
  // constructor(
  //   public email: string,
  //   public displayName: string,
  //   private kind: string,
  //   private localId: string,
  //   private idToken: string,
  //   public registered: boolean,
  //   private refreshToken: string,
  //   private expiresIn: Date
  // ) {}

  constructor(
    public email: string,
    public id: string,
    public token: string,
    public tokenExpirationDate: Date
  ) {}

  // get token() {
  //   if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
  //     return null;
  //   }
  //   return this._token;
  // }
}
