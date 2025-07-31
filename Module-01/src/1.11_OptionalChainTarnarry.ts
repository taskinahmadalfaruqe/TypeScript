{
  // Block Scoping

  // tarnary operator
  let age = 19;
  console.log(age);
  age = 18;
  const isAdult = age > 18 ? "Adult" : "child";
  console.log(isAdult);

  // nullising operator only work for null and undefined value

  const userAuthenticed = "null";
  const isRealUseer = userAuthenticed ?? "Not A Real User";
  console.log(isRealUseer);

  //optional chaining
  type User = {
    name: string;
    address: {
      permanentAddress?: string;
      presentAddress?: string;
    };
    mobile: number;
  };
  const userData: User = {
    name: "Taskin Ahmad AL Faruqe",
    mobile: 25562,
    address: {
      presentAddress: "China",
    },
  };
  const getData = userData?.address?.presentAddress??"No Address Found";
  const getData2 = userData?.address?.permanentAddress?? "No Adress Found";
  console.log({ getData }, { getData2 });

  // Block Scoping
}
