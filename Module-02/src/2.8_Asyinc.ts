{
  // Block Scoping
  const createPromise = () => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Hello Developer";
      if (data) {
        resolve(data);

      } else {
        reject("No Data");
      }
    });
  }

  const ShowData = async () => {
    const result: string = await createPromise();
    console.log(result)
    return result;
  }
  ShowData();

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data)
    return data;
  }
  getData();
  // Block Scoping
}
