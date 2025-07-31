import { Booking } from "../models/Booking";
import { BaseRepository } from "./BaseRepository";

const sampleBookings: Booking[] = [
  { id: "1", userId: "1", courseId: "2", date: "2024-07-01" },
  { id: "2", userId: "2", courseId: "1", date: "2024-07-02" },
];

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super(sampleBookings);
  }
}
