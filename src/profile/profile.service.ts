import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile)
    private profileService: Repository<Profile>,
    ) { }

    async addUser(user: any) {
        return this.profileService.save(user)
    }

    async findOneUser(id: number) {
        return await this.profileService.findOne({ where: { id } });
    }

    async updateUser(id: number, user: Profile) {
        return this.profileService.update(id, user)
    }

    async deleteUser(id: number) {
        return this.profileService.delete(id)
    }

}