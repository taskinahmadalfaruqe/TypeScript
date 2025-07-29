"use strict";
{
    // Block Scoping
    // spread operator
    const userData = ["Taskin", "Ahmad", "Al", "Faruqe", "humaira"];
    const userData02 = [
        "Taskin2",
        "Ahmad2",
        "Al2",
        "Faruqe2",
        "humaira2",
    ];
    userData.push(...userData02);
    console.log(userData);
    // Rest Operator
    const Friends = (friend1, friend2) => {
        console.log(friend1, friend2);
    };
    Friends("Taskin", "Ahmad");
    // Rest Operator
    const FriendsRest = (...Friends) => {
        Friends.forEach(friend => (console.log(`Hi ${friend}`)));
    };
    FriendsRest("Taskin", "Ahmad", "Al", "Faruqe");
}
