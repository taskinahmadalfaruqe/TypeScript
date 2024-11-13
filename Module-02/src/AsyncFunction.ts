{
  //Scoping

  const getasyncData = () => {
    return new Promise((resolve, reject) => {
      const data: string = "Taskin";
      if (data) {
        resolve(data);
      } else {
        reject("No Data Found");
      }
    });
  };
  //Scoping
}
