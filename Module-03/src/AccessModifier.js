"use strict";
{
    // Block Scope
    // 01. Public Modifier
    // 02. Private Modifier
    // 03. read only Modifier
    // 04. Protected  Modifier
    class BankAccount {
        constructor(name, id, MyBalance) {
            this.name = name;
            this._MyBalance = MyBalance;
            this.id = id;
        }
        addBalance(Ammount) {
            this._MyBalance = this._MyBalance + Ammount;
        }
        myBalance() {
            return this._MyBalance;
        }
    }
    const GoribManusErAccount = new BankAccount("Taskin Ahmad Al Faruqe", 242910701126, 20);
    GoribManusErAccount.addBalance(500);
    console.log(GoribManusErAccount.myBalance());
    // Block Scope
}
