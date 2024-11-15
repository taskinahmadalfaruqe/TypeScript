{
  // Block Scoped
  type a = number;
  type b = undefined;
  type c = a extends null ? true : false;
  type d = a extends null ? true : b extends undefined ? true : false;
  type sheik = {
    car: string;
    plean: string;
    bike: string;
  };
  type hasVechile<T> = T extends keyof sheik ? true : false;
  type hasBike = hasVechile<"Car">;
  // Block Scoped
}
