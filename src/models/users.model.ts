import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;
  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: false,
  })
  address: string;

  @property({
    type: 'string',
    required: false,
  })
  city: string;

  @property({
    type: 'string',
    required: false,
  })
  state: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  roles: string[];

  @property({
    type: 'number',
    required: true,
  })
  tenentID: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: false,
  })
  additionalInfo: {key: string,  value: string | object | never[]}[];
  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
