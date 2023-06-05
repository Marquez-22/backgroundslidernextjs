

type ContentImagesType = "ContentImages" | "ContentImages"


interface ContentImagesProps {
    type?: ContentImagesType
    img?: string[]
    className?: string
    active?: number
}

export const ContentImages = ({ active = 0, img, type = "ContentImages" }: ContentImagesProps) => {
    
    return (<>
        <div className={`ContentImages ${type}`}>
            {
                [img].flat(2).map((elemento, index) => {
                    return (
                        <>
                            <img className={`img ${active == index ? "active" : ""}`} key={index} src={elemento}></img>
                        </>
                    )
                })
            }
        </div>
    </>)




}







