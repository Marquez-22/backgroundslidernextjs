
import { SVGArrowRight } from "@/styles/svg/arrowRight"
import { ReactNode } from "react"

type ButtonArrowRigthType = "ButtonArrowRigth1"

interface ButtonArrowRigthProps {
    type?: ButtonArrowRigthType
    children?: ReactNode
    className?: string
    onClick?: () => void
}

export const ButtonArrowRigth = ({ type = "ButtonArrowRigth1", children, onClick, className = "" }: ButtonArrowRigthProps) => {
    return (<>
        <button className={`ButtonArrowRigth ${type} ${className}`} onClick={onClick}>
            {children}
            <SVGArrowRight />

        </button>
    </>)
}