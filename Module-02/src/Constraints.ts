{
  // Block Scoped
  type mobile = {
    Oneplus: string;
    Apple: string;
    Samsung: string;
  };

  const mobileData: mobile = {
    Oneplus: "9R",
    Apple: "15",
    Samsung: "S24",
  };

  type Data = () => string;
  const data:Data = (mobileData) => {
    return mobileData;
  };
  // Block Scoped
}
