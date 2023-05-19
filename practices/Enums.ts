// ENUMS

enum ResourceType {
  BOOK,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resources<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc5: Resources<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of book" },
};

const doc6: Resources<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { title: "Arav" },
};

console.log(doc5, doc6);
