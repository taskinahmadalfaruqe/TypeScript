{
  // Block Scoped
  type NumString = number | string;
  const AddNumber = (Data: NumString, Data02: NumString) => {
    if (typeof Data === "number" && typeof Data02 === "number") {
      return Data + Data02;
    } else {
      return Data.toString() + Data02.toString();
    }
  };
  console.log(AddNumber(5, "10"));

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const CheckUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is:${user.name} and i am ${user.role}.`);
    } else {
        console.log(`My name is:${user.name} and i am normal user.`);
    }
  };
  const user={
    name:"Taskin Ahmad Al Faruqe"
  }
  const user02={
    name: "Taskin Ahmad Al Faruqe",
    role: "admin"
  }
  CheckUser(user02)
  // Block Scoped
}
