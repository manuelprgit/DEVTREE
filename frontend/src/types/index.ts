export type TUser = {
    name: string,
    handle: string,
    email: string
}

export type TRegisterForm = Pick<TUser,'name' | 'handle' | 'email'> & {
    password: string,
    password_confirmation: string
}