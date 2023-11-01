import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile)
    private userService: Repository<Profile>,
    ) { }

    async addUser(user: any) {
        return this.userService.save(user)
    }

    async findOneUser(id: number) {
        return await this.userService.findOne({ where: { id } });
    }

    async updateUser(id: number, user: Profile) {
        return this.userService.update(id, user)
    }

    async deleteUser(id: number) {
        return this.userService.delete(id)
    }

}