{
    // Block Scoped
    //   Type and Interface
  
    //   Type
    type User1 = {
      Name: string;
      IdNumber: number;
    };
  
    // interface
    interface User02 {
      UserName: string;
      MobileNumber: number;
    }
  
    //   how to extend type Alies or Interface and type
  
    //type extend
    type User1Extend = User1 & { Roll: number };
  
    //Interface Extend
    interface User02Extend extends User02 {
      Roll: number;
    }
  
    const UserData: User1Extend = {
      Name: "Taskin Ahmad Al Faruqe.",
      IdNumber: 1,
      Roll: 52,
    };
  
    const UserData02: User02Extend = {
      UserName: "Taskin Ahmad Al Faruqe",
      MobileNumber: 1318021256,
      Roll: 10,
    };
    console.log(UserData);
    console.log(UserData02);
    // Block Scoped
  }
  