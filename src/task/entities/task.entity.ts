import { v4 as uuid } from 'uuid';
interface ITask {
  readonly ID?: string;
  readonly description: string;
  readonly userID: string;
}
export class Task {
  readonly ID: string;
  readonly description: string;
  readonly userID: string;
  constructor(props: ITask) {
    (this.userID = props.userID),
      (this.ID = props.ID ?? uuid()),
      (this.description = props.description);
  }
}
