{
  // Block Scope

  // Union Type |
  type InterSectionType = "Friend" | "Best Friend";

  const myFriend: InterSectionType = "Best Friend";
  console.log(myFriend);

  type intersectionFriend = "Close One" | "General One";
  type FriendType = InterSectionType | intersectionFriend;

  const FriendData: FriendType = "Best Friend";

  type UserSkills = {
    skills: string[];
    name: string;
    age: number;
    email?: string;
    gender: "Meal" | "Female";
  };

  const UserData: UserSkills = {
    skills: ["React"],
    name: "Taskin Ahmad Al Faruqe",
    age: 24,
    gender: "Meal",
  };
  console.log(UserData);
  //   InterSection Type &
  type Developer01 = {
    skills: string[];
    mustKnow: "React";
  };
  type Developer02 = {
    skills: string[];
    Technology: "Next";
  };
  type IsMERN = Developer01 & Developer02;
  const Developer: IsMERN = {
    skills: ["React", "Node", "Express", "MongoDB"],
    mustKnow: "React",
    Technology: "Next",
  };
  console.log(Developer);
  // Block Scope
}
