// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "Yash", age: 12 });
// let doc2 = addUID('hello');

console.log(doc1);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc3: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "Riya" },
};

const doc4: Resource<string[]> = {
  uid: 2,
  resourceName: "Shopping List",
  data: ["bread", "milk", "jam"],
};
console.log(doc3, doc4);
