"use strict";
{
    // Block Scoping
    //   Object Destructuring
    const userData = {
        contact: 1318021256,
        name: {
            firstName: "Taskin",
            middleName: "Ahmad Al",
            lastNmae: "Faruqe",
        },
        email: "taskinahmadalfaruqe@gmail.com",
    };
    // contact alays with phoneNumber now we can called by PhoneNumber
    const { contact: PhoneNumber, name: { middleName: midName }, } = userData;
    console.log(PhoneNumber);
    console.log(midName);
    //   Array Destructuring
    const FriendsArray = ["Taskin", "Ahmad", "Al", "Faruqe"];
    const [firstName, bestFriend, ...All] = FriendsArray;
    console.log(All);
    console.log(firstName);
    // Block Scoping
}
