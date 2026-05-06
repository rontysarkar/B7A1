# any vs unknown in TypeScript

## Introduction

TypeScript ব্যবহার করতে গেলে `any` আর `unknown`—এই দুইটা টাইপ প্রায়ই দেখা যায়। প্রথমে দেখলে মনে হতে পারে দুটো একই কাজ করে, কিন্তু আসলে ওদের behaviour আলাদা, আর এই পার্থক্যটা বোঝা important।

## any কেন problem

`any` ব্যবহার করলে TypeScript কিছুই check করে না। তুমি যেকোনো value-কে যেভাবে খুশি use করতে পারো, ভুল হলেও কোনো error দেখাবে না।

```ts
let value: any = 10;
value.toUpperCase(); // error ধরবে না
```

এখানে number এর ওপর string method call করা হলেও TypeScript কিছু বলছে না।

এই কারণেই `any`-কে “type safety hole” বলা হয়। কারণ এটা type checking system-কে ignore করে দেয়।

## unknown কেন better

`unknown`-ও unknown data handle করার জন্য ব্যবহার হয়, কিন্তু এখানে restriction আছে। তুমি সরাসরি এর ওপর operation চালাতে পারবে না।

```ts
let value: unknown = 10;
value.toUpperCase(); // error দিবে
```

এখানে আগে check না করলে use করা যাবে না।

## Type Narrowing কী

Type narrowing মানে হলো check করে variable-এর actual type বের করা।

```ts
function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

এখানে check করার পরে TypeScript বুঝে যায় `value` একটা string, তাই safe ভাবে method use করা যাচ্ছে।
