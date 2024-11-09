{
  // Block Scoped

  interface developer<T> {
    Computer: string;
    Model: string;
    mobile: T;
  }
  type mobilePhone = {
    Name: string;
    Model: string;
  };
  const poorDeveloper: developer<mobilePhone> = {
    Computer: "HP",
    Model: "i5 8th Gen",
    mobile: {
      Name: "Oneplus",
      Model: "9r",
    },
  };
  interface ProMobile {
    Name: string;
    Modle: string;
Ram:string;
Room:string;
  }
  const proDeveloper: developer<ProMobile> = {
    Computer: "Apple MackBook",
    Model: "Air 1",
    mobile: {
      Name: "Iphone",
      Modle: "15 Pro Max",
Ram: "8GB",
Room:"256 GB"
    },
  };
  // Block Scoped
}
