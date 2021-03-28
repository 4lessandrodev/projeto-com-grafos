import { v4 as uuid } from 'uuid';
interface UserProps {
  ID?: string;
  name: string;
}

export class User {
  readonly ID: string;
  readonly name: string;

  constructor(props: UserProps) {
    (this.ID = props.ID ?? uuid()), (this.name = props.name);
  }
}
