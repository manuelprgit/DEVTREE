import { ReactNode } from "react"

interface ErrorMessagesProps {
    children: ReactNode;
}

export const ErrorMessages = ({ children }: ErrorMessagesProps) => {
    return (
        <p className='absolute bottom-[-15px] text-red-500'>{children}</p>
    )
}
