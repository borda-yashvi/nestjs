export default class userDto {
    constructor(
        readonly id: number,
        readonly username: string,
        readonly email: string) {
        this.id = id;
        this.username = username;
        this.email = email
    }
    // id: number;
    // email: string;
    // username: string
}
