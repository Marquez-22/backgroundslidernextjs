
import { SVGArrowLeft } from "@/styles/svg/arrowleft"
import { ReactNode } from "react"

type ButtonArrowLeftType = "ButtonArrowLeft1" 

interface ButtonArrowLeftProps {
    type?: ButtonArrowLeftType
    children?: ReactNode
    className?: string
    onClick?: () => void
}

export const ButtonArrowLeft = ({ type = "ButtonArrowLeft1", children, onClick, className = "" }: ButtonArrowLeftProps) => {
    return (<>
        <button className={`ButtonArrowLeft ${type} ${className}`} onClick={onClick}>
            {children}
            <SVGArrowLeft/>
            
        </button>
    </>)
}