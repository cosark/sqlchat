import { Id } from "./common";

export interface Database {
  connectionId: Id;
  name: string;
  tableList: Table[];
}

interface Table {
  name: string;
  // structure is a string of the table structure.
  // It's mainly used for providing a chat context for the assistant.
  structure: string;
}
