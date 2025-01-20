{
  // Block Scoping
  class BankAccount {
    private static accountCounter = 1000; // Counter to generate unique account numbers
    public readonly accountNumber: number;
    public accountHolder: string;
    private balance: number;
    private transactionHistory: { type: string; amount: number; date: string }[] = [];

    constructor(accountHolder: string, initialDeposit: number = 0) {
        if (initialDeposit < 0) {
            throw new Error("Initial deposit cannot be negative.");
        }

        this.accountNumber = BankAccount.accountCounter++;
        this.accountHolder = accountHolder;
        this.balance = initialDeposit;
        this.recordTransaction("Deposit", initialDeposit);
    }

    // Deposit money
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.balance += amount;
        this.recordTransaction("Deposit", amount);
    }

    // Withdraw money
    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        this.recordTransaction("Withdrawal", amount);
    }

    // Get current balance
    getBalance(): number {
        return this.balance;
    }

    // Get transaction history
    getTransactionHistory(): { type: string; amount: number; date: string }[] {
        return this.transactionHistory;
    }

    // Static method to transfer money
    static transfer(from: BankAccount, to: BankAccount, amount: number): void {
        if (amount <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }
        from.withdraw(amount);
        to.deposit(amount);
    }

    // Private method to record a transaction
    private recordTransaction(type: string, amount: number): void {
        this.transactionHistory.push({
            type,
            amount,
            date: new Date().toISOString(),
        });
    }
}

// Example usage:
try {
    const account1 = new BankAccount("Alice", 500);
    const account2 = new BankAccount("Bob", 300);

    account1.deposit(200);
    account2.withdraw(100);

    console.log(`Account 1 balance: ${account1.getBalance()}`); // Output: 700
    console.log(`Account 2 balance: ${account2.getBalance()}`); // Output: 200

    BankAccount.transfer(account1, account2, 150);

    console.log(`Account 1 balance after transfer: ${account1.getBalance()}`); // Output: 550
    console.log(`Account 2 balance after transfer: ${account2.getBalance()}`); // Output: 350

    console.log("Account 1 transaction history:", account1.getTransactionHistory());
    console.log("Account 2 transaction history:", account2.getTransactionHistory());
} catch (error) {
    console.error(error.message);
}

  // Block Scoping
}
