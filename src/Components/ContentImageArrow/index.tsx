import { ButtonArrowLeft } from "../ButtonArrowLeft"
import { ContentImages } from "../ContentImage"
import { ButtonArrowRigth } from "../ButtonArrowRight"
import { useState } from "react"

type ContentImageArrowType="ContentImageArrow"

interface ContentImageArrowProps{
    type?:ContentImageArrowType
    img?: string[]
}


export const ContentImageArrow=({img=[],type="ContentImageArrow"}:ContentImageArrowProps)=>{
    const [Cambiar, setCambiar] = useState(0)
       const clickCambiar =(add:number)=>{
        setCambiar ((cambiar) =>{
            if( cambiar + add < 0){
                return img?.length -1
            }
            if( cambiar + add > img?.length -1){
                return 0
            }
            return  cambiar + add
        }) 

       
    }
    return(<>
  
    <div className={`ContentImageArrow ${type}`}>
        <ButtonArrowLeft className="arrowLeft"
            onClick={()=>{
                clickCambiar(-1)
            }}
        />
        <ContentImages 
        img={img}
          active={Cambiar}
        
        />
        <div className="capa"></div>
        <ButtonArrowRigth className="arrowRight"
            onClick={()=>{
                clickCambiar(1)
            }}/>
    </div>
    </>)
}