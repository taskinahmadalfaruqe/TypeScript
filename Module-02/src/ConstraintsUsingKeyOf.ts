{
  // Block Scoped
  type mobile = {
    Oneplus: string;
    Apple: string;
    Samsung: string;
  };
  type data01 = "Apple" | "Samsung" | "Oneplus";
  type data02 = keyof mobile;
  const mobleUser: data02 = "Apple";
  // Block Scoped
}
