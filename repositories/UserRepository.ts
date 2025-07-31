import { User } from "../models/User";
import { BaseRepository } from "./BaseRepository";

const sampleUsers: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(sampleUsers);
  }
}
