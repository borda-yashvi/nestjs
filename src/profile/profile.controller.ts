// import { Controller, Post, Get, Req, Param, Body, Query, Headers, HttpCode, HttpStatus, Response, Res, Header, Redirect, Ip } from "@nestjs/common";
// import { Request } from "express"
// import { userDto } from "src/dto";

// const array = []
// @Controller("/user")
// export class UserController {

//     // @Post("/profile")
//     // @HttpCode(200)
//     // @Redirect("/user/data", 200)
//     // @HttpCode(HttpStatus.OK)
//     // @Header('Cache-Control', "token...")
//     // getProfile(@Param() params: Record<string, any>) {
//     //     return params
//     //     // const result = "hihihhihi";
//     //     // return result

//     //     // return {
//     //     //     url: "/user/data",
//     //     //     statusCode: 200,
//     //     // }
//     // }
//     // getProfileParams(@Body() body: Record<string, any>) {
//     //     array.push(body)
//     //     return array
//     // }

//     // @Get("/name/:name")
//     // redirectRoute(@Param() params: Record<string, any>) {
//     //     const data = array.filter(data => params.name == data.name)
//     //     return data
//     // }

//     @Get("/ip")
//     getProfileParams(@Ip() ip: Record<string, any>) {
//         return ip
//     }
// }

import { Controller, Post, Get, Put, Delete, Req, Param, Body, Query, Headers, HttpCode, HttpStatus, Response, Res, Header, Redirect, Ip, Injectable, Inject } from "@nestjs/common";
import { Request } from "express"
import { ProfileService } from "./profile.service";
import userDto from "src/dto/UserDto";

@Controller("/profile")
export class ProfileController {
    // constructor(@Inject("DATA_BASE_CONNECTION") private store: any) {
    //     console.log(store);
    // }
    constructor(private profileService: ProfileService) { }

    @Post()
    createUser(@Body() user: userDto) {
        return this.profileService.addUser(user)
    }

    // @Get()
    // findAllUser() {

    // }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.profileService.findOneUser(id)
    }

    @Put(':id')
    updateUser(@Param('id') param: number, @Body() body: userDto) {
        return this.profileService.updateUser(param, body)
    }

    @Delete(':id')
    deleteUser(@Param() param: any) {
        return this.profileService.deleteUser(param)
    }
}
