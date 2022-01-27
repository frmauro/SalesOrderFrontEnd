import { Item } from "src/app/models/Item";

export class OrderEditVM {
  id: string;
  description: string;
  moment: string;
  status: string;
  userId: string;
  items: Item[];
}
