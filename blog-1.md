# any vs unknown in TypeScript

TypeScript ব্যবহার করতে গেলে `any` আর `unknown`—এই দুইটা টাইপ প্রায়ই দেখা যায়। বাইরে থেকে দেখলে মনে হতে পারে দুটোই একই কাজ করে, কিন্তু আসলে ওদের behaviour অনেকটা আলাদা।

## any কেন problem

any ব্যবহার করলে TypeScript কিছুই check করে না। তুমি যেকোনো value-কে যেভাবে খুশি use করতে পারো, ভুল হলেও কোনো error দেখাবে না।

ধরো তুমি একটা number-কে string এর মতো ব্যবহার করলে, বা এমন কোনো property access করলে যেটা আসলে নেই—তবুও TypeScript কিছু বলবে না।

এই কারণেই `any`-কে “type safety hole” বলা হয়। এটা type system-কে basically ignore করে দেয়।

## unknown কেন better

`unknown`-ও unknown data handle করার জন্য ব্যবহার হয়, কিন্তু এখানে একটা restriction আছে। তুমি সরাসরি এর ওপর কিছু করতে পারবে না।

আগে তোমাকে check করতে হবে data-টা আসলে কোন type-এর। check করার পরেই তুমি সেটা safely use করতে পারবে।

## Type Narrowing কী

Type narrowing মানে হলো check করে variable-এর actual type বের করা।

উদাহরণ:

```ts
function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

এখানে `typeof` দিয়ে check করার পরে TypeScript বুঝে যায় যে এই block-এর ভেতরে `value` একটা string। এই process-টাই narrowing।

