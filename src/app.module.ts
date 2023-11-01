import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserStore } from './user/user.store';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Profile } from './profile/profile.entity';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';

function createConnection(option) {
  console.log("connect", option);

}
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'admin@123',
      database: 'postgres',
      entities: [User, Profile],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Profile]),

  ],
  controllers: [UserController, ProfileController],
  providers: [UserService, ProfileService]
  //   {
  //   provide: "DATA_BASE_CONNECTION", useFactory: async (option) => {
  //     const connection = await createConnection(option)
  //     return connection
  //   },
  //   inject: ['DB']
  // },
  //   {
  //     provide: "DB",
  //     useValue: { url: '', user: '', password: '' }
  //   },
  // UserService
})
export class AppModule { }
