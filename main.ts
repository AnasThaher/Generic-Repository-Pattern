import { UserRepository } from "./repositories/UserRepository";
import { CourseRepository } from "./repositories/CourseRepository";
import { BookingRepository } from "./repositories/BookingRepository";

async function testRepositories() {
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();

  console.log("📌 Users:", await userRepo.getAll());
  console.log("📌 Courses:", await courseRepo.getAll());
  console.log("📌 Bookings:", await bookingRepo.getAll());

  const newUser = await userRepo.create({ id: "3", name: "Charlie", email: "charlie@example.com" });
  console.log("➕ Created User:", newUser);

  const updatedUser = await userRepo.update("1", { name: "Alice Updated" });
  console.log("🛠️ Updated User:", updatedUser);

  const foundUsers = await userRepo.findBy({ name: "Bob" });
  console.log("🔍 Found Users:", foundUsers);

  const deleted = await userRepo.delete("2");
  console.log("🗑️ Deleted User 2:", deleted);

  console.log("📌 Final Users:", await userRepo.getAll());
}

testRepositories();
