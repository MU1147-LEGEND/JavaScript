import _ from "lodash";

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 30 },
    { name: "C", age: 20 },
];

const grouped = _.groupBy(users, "age");

console.log(grouped[20]);
