let skup: number[] = [1, 2, 4];

// tuples
let tuple: [string, number] = ["apple", 2];

// enum
const enum Size {
  Small = "a",
  Medium = 1,
  Large,
}

let value: Size = Size.Medium;

//functions
function calculateTax(income: number, taxYear = 8): number {
  if (taxYear > 50000) {
    return income * 0.2;
  }
  return income;
}

//Objects and type aliases

type Employee = {
  readonly id: number;
  name?: string;
  retire: (data: Date) => void;
};

const employee: Employee = {
  id: 3,
  retire: (data) => {
    console.log(data);
  },
};

employee.name = "Mark";

// Union type

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

// Intersection types
type Width = {
  width: () => void;
};
type Height = {
  height: () => void;
};

type Area = Height & Width;

let box: Area = {
  width: () => {},
  height: () => {},
};

// Literal Types
type Quantity = 50 | 100;
let quanrity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable types

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hay");
  }
}
greet(null);

// Optional chaining

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday.getFullYear());

let log: any = null;
log?.("a");
