export type TUser = {
    handle: string,
    name: string,
    email: string,
}

export type TRegisterForm = Pick<TUser, 'name' | 'handle' | 'email'> & {
    password: string,
    password_confirmation: string
}