export type TUser = {
    handle: string,
    name: string,
    email: string,
}

export type TRegisterForm = Pick<TUser, 'email' | 'handle' | 'name'> & {
    password: string,
    password_confirmation: string
}