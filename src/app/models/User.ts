export interface User {
userId: number;
    first: string;
    last: string;
    email: string;
    pass: string;
}

export interface UserDTO {
    userId: number;
    email: string;
}
