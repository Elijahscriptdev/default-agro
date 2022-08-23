import { User } from '../../users/user.type';

export type LoginFormValues = {
    email: string,
    password: string
}

export type LoginResponse = {
    expires_in: number,
    token: string,
    user: User

}