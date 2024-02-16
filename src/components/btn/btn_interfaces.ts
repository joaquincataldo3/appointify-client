export interface BtnProps {
    content: string
    width: number
}

export interface RegularBtnProps extends BtnProps {
    handleClick?: () => void
}

export interface FormBtnProps extends BtnProps {
    handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void
}