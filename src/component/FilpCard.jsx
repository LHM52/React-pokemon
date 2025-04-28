import { useState } from "react"
import styled from "styled-components"

const FilpImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style:preserve-3d;
    transition: 0.5s;
    transform: ${props => props.filpped ? 'rotateY(180deg)': 
    'rotateY(0deg)'};
`

const FrontImage = styled.img`
width: 100%;
height: 100%;
    backface-visibility: hidden;
    position: absolute;
`
const BackImage = styled.img`
width: 100%;
height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export default function FilpCard({front,back}) {
    const [filpped, setFilpped] = useState(false);
    return (
        <>
            <FilpImageContainer filpped={filpped ? 'filp' : ''}>
                <FrontImage src={front} />
                <BackImage src={back} />
            </FilpImageContainer>
            <button onClick={() => setFilpped(prev => !prev)}>
                뒤집기
            </button>
        </>
    )
}