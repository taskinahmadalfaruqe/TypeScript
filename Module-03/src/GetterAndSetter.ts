{
  // Block Scoping
  // Geter And Setter(To get the vale as a object destructure)
  class BankAccount {
    public name: string;
    public readonly id: number;
    protected _MyBalance: number; // private (if i wnat to fiend this property on child class this i use protected modifier or i use private modidifre.)
    constructor(name: string, id: number, MyBalance: number) {
      this.name = name;
      this._MyBalance = MyBalance;
      this.id = id;
    }

    // Setter Method
    set addBalance(Ammount: number) {
      this._MyBalance = this._MyBalance + Ammount;
    }
    // public addBalance(Ammount: number) {
    //   this._MyBalance = this._MyBalance + Ammount;
    // }

    // Geter Methode
    get myBalance() {
      return this._MyBalance;
    }
    // public myBalance() {
    //   return this._MyBalance;
    // }
  }
  const GoribManusErAccount = new BankAccount(
    "TRaskin Ahmad Al Faruqe",
    242910701126,
    20
  );
  GoribManusErAccount.addBalance = 500;
  console.log(GoribManusErAccount.myBalance);
  // Block Scoping
}
