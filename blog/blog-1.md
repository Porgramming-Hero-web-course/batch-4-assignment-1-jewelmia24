# The significance of union and intersection types in Typescript.

Two important features of this type system in TypeScript are union and intersection type. In this blog, we will see what is union and intersection types are, how it work.

## What is union and intersection type?

### Union Type

A union type is a type in which a variable can be any one of several types. The variable can be any of these types.” 
Union type symbol is "|".


#### Example:

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello" //right
value = 99  //right
value = ture //wrong


Here, StringOrNumber is a union type, which means the value variable can be a string or a number, but not a boolean.


### Intersection type

The intersection type combines multiple types and forces a variable to satisfy all the properties of those types.
Intersection type symbol is "&".

#### Example:

type Person = { name: string };
type Employee = { employeeId: number };

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Alice",
    employeeId: 123
};


Here, EmployeeDetails is a intersection type of the Person and Employee types, requiring the employee variable to have both name and employeeId attributes.


