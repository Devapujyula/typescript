// email? : string -> email may be absent , if its present it will be string
// it is not same as email : string | undefined

type User = {
  id: string; // required
  name: string;
  email?: string; // optional (could be absent)
  readonly createdAt: Date;
};

const user1: User = { id: "u1", name: "prakash", createdAt: new Date() };
const user2: User = {
  id: "u2",
  name: "satya",
  createdAt: new Date(),
  email: "email",
};

// user1.createdAt = new Date()

type User2 = { email?: string };
type User3 = { email: string | undefined };

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares" | "random", number>;

const c1: Count = { whatever: 1 };
const c2: Count1 = { likes: 1, views: 2, shares: 3, random: 5 };
