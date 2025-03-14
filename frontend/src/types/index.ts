export type TUser = {
    handle: string,
    name: string,
    email: string,
    description: string
}

export type TRegisterForm = Pick<TUser, 'name' | 'handle' | 'email'> & {
    password: string,
    password_confirmation: string
}

export type TLoginView = Pick<TUser, 'email'> & {
    password: string,
}

export type TProfileForm = Pick<TUser, 'handle' | 'description'>