{
  // Block Scope
  // 01. Public Modifier
  // 02. Private Modifier
  // 03. read only Modifier
  // 04. Protected  Modifier
  class BankAccount {
    public name: string;
    public readonly id: number;
    protected _MyBalance: number; // private (if i wnat to fiend this property on child class this i use protected modifier or i use private modidifre.)
    constructor(name: string, id: number, MyBalance: number) {
      this.name = name;
      this._MyBalance = MyBalance;
      this.id = id;
    }
    public addBalance(Ammount: number) {
      this._MyBalance = this._MyBalance + Ammount;
    }
    public myBalance() {
      return this._MyBalance;
    }
  }
  const GoribManusErAccount = new BankAccount(
    "TRaskin Ahmad Al Faruqe",
    242910701126,
    20
  );
  GoribManusErAccount.addBalance(500);
  console.log(GoribManusErAccount.myBalance());
  // Block Scope
}
