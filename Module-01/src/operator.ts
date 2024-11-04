{
  // ternary Operator
  const numberData: number = 50;
  const isTrue = numberData <= 18 ? "Go With Father." : "You Are Adult";
  console.log(isTrue);

  //   alies only work with null and undefiend value
  type Admin = null;
  const isAdmin = null;
  const dataOfAdmin=isAdmin??"Guest";
  const dataOfAdmin2=isAdmin?"Guest":"User";
  console.log({dataOfAdmin},{dataOfAdmin2});
}
