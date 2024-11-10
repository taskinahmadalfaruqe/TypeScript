{
  // Block Scoped
  type mobile = {
    Oneplus: string;
    Apple: string;
    Samsung: string;
  };

  type Data = <T>(mobile:T) => {
    const newMobile ="HELLO";
    return{
      ...mobileData,
      newMobile
    };
  };
  const data:Data = (mobileData) => {
    return mobileData;
  };

  const mobileData: mobile = {
    Oneplus: "9R",
    Apple: "15",
    Samsung: "S24",
  };
  // Block Scoped
}
