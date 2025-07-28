{
  // Block Scoping

  // spread operator
  const userData: string[] = ["Taskin", "Ahmad", "Al", "Faruqe", "humaira"];
  const userData02: string[] = [
    "Taskin2",
    "Ahmad2",
    "Al2",
    "Faruqe2",
    "humaira2",
  ];
  userData.push(...userData02);
  console.log(userData);
}
