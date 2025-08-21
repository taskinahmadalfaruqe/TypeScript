{
    // Block Scoping 
    // Conditional Type
    type a = string;
    type b = number;
    type c = a extends string ? true : false;
    type d = b extends number ? true : a extends string ? true : "Not Working";

    
    // Conditional Type
    // Block Scoping 
}