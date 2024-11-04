{
  // Null Able
  const nullAble = (data: string | null) => {
    if (data) {
      console.log("sercing Data.");
    } else {
      console.log("No data Found.");
    }
  };
  nullAble(null);

  // type of unknown
  function unknownData(data: unknown) {
    if (typeof data === "string") {
      console.log("hello");
    } else if (typeof data === "number") {
      console.log(data);
    } else {
      console.log("No data");
    }
  }
  unknownData(50);

  // Never type
  // je function kono kicu return kore na oi ta never type function
  function neverFunction(message: string) {
    throw new Error(message);
  }
  neverFunction("Please Please Amaek Khoma Kore Deou.");
}
