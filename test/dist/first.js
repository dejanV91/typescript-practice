"use strict";
let skup = [1, 2, 4];
let tuple = ["apple", 2];
let value = 1;
function calculateTax(income, taxYear = 8) {
    if (taxYear > 50000) {
        return income * 0.2;
    }
    return income;
}
const employee = {
    id: 3,
    retire: (data) => {
        console.log(data);
    },
};
employee.name = "Mark";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let box = {
    width: () => { },
    height: () => { },
};
let quanrity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hay");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
//# sourceMappingURL=first.js.map