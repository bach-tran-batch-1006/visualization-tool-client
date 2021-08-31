export interface User {
    id: number;
    first: string;
    last: string;
    email: string;
    pass: string;
}

export interface UserDTO {
    id: number;
    email: string;
}
