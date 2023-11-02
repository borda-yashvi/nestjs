import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userService: Repository<User>,
    ) { }

    async addUser(user: any) {
        return this.userService.save(user)
    }

    async findOneUser(id: number) {
        return await this.userService.findOneBy({ id });
    }

    async updateUser(id: number, user: User) {
        return this.userService.update(id, user)
    }

    async deleteUser(id: number) {
        return this.userService.delete(id)
    }

}