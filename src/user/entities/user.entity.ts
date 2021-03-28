interface UserProps {
  id: string;
  name: string;
}

export class User {
  readonly id: string;
  readonly name: string;

  constructor(props: UserProps) {
    (this.id = props.id), (this.name = props.name);
  }
}
