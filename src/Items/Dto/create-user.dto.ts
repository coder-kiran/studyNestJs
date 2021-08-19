// This is a data. Its just a schema
// which tells us how the data is transferred

export class CreateUserDto {
    readonly fname: string;
    readonly laname: string;
    readonly email: string;
    readonly phoneno: string;
    readonly passwrd: string;
}