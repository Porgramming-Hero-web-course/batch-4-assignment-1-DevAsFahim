# The significance of union and intersection types in Typescript.

As the most popular superset of Javascript, typescript offers a powerful set of features to enhance code safety and maintainability. Among them, Union and Intersection types play a significant role. In this blog, we will know the basics of union and intersection types.

## Union type: 

When playing Typescript, you can occasionally encounter situations where your variable may contain one of several possible datatypes. For example, you have a variable named ‘age’, which can contain either ‘string’ or ‘number datatype. This problem can be solved by typescript using union type, donated by the “|” symbol. Here is an example: 
```
type User = {
	name: string;
	age: number | string;
}
const user: User = {
	name: “John Doe”,
	age: 24
}
```

In the above example, the age property in the User type can be a string or a number. If any other type of value is provided, typescript will throw a compile-time error. 

## Intersection type: 

This type is the exact opposite of the union type, which can combine multiple types into a single type. This allows developers to create new type that possess the characteristics of each merged type. To create an intersection type, use the “&” operator between types.

```
type Person = {
	name: string;
	age: number;
}
type Employee = {
	company: string;
	position: string;
}
type EmployedPerson = Person & Employee;

const employee: EmployedPerson = {
	name: “John Doe”,
	age: 27,
	company: “example corp”,
	position: “software engineer”
}
```

In this example,  the type EmployedPerson is created with two different types Person and Employee then the object EmployedPerson is created based on both Person and Employee types.