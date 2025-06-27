let objectData: {
    university: "JUST",
    firstName: string,
    midilName?: string,
    lastName: string,
    isMaried: boolean,
} = {
    university: "JUST",
    firstName: "Taskin",
    midilName: "Ahmad Al",
    lastName: "Faruqe",
    isMaried: false,
}
// Assign a value in object 
let ObjectDataReadonly: {
    readonly university: string,
    firstName: string,
    midilName?: string,
    lastName: string,
    isMaried: boolean,
} = {
    university: "JUST",
    firstName: "Taskin",
    midilName: "Ahmad Al",
    lastName: "Faruqe",
    isMaried: false,
}
// ObjectDataReadonly.university = "Jiangs University Of Science and Technology";
ObjectDataReadonly.midilName = undefined;