type FilterEvenNumbers = (numbers: number[]) => number[];

const filterEvenNumbers: FilterEvenNumbers = (numbers) => {
  return numbers.filter((e) => e % 2 === 0);
};

const reverseString = (str: string): string => {
  let reverStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverStr += str[i];
  }
  return reverStr;
};

type StringOrNumber = string | number;

const checkType = (strOrNum: StringOrNumber): "String" | "Number" => {
  if (typeof strOrNum === "number") {
    return "Number";
  } else {
    return "String";
  }
};

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (book: Book) => {
  book.isRead = true;
  return book;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const result = arr1.filter((e) => arr2.includes(e));
  return result;
};
