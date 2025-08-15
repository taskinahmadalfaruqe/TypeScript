{
  // Block Socping

  type Veichal = {
    car: string;
    bike: string;
    truck: string;
  };

  type mobile = {
    Oneplus: string;
    Apple: string;
    Samsung: string;
  };
  type data01 = "Apple" | "Samsung" | "Oneplus";
  type data02 = keyof mobile;
  const mobleUser: data02 = "Apple";
  const User01: data01 = "Samsung";

  const AllDataFunction = (data: string): string => {
    return data;
  };
  AllDataFunction(User01);
  // Block Socping
}
