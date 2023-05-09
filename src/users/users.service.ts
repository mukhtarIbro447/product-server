import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      name: 'john',
      username: 'john@test.com',
      password: 'changeme',
    },
    {
      userId: 2,
      name: 'maria',
      username: 'maria@test.com',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
