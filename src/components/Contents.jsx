import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StColumnFlexDiv } from '../styles'

function Contents() {
    const data = useSelector((state)=>state.todolist);
    console.log('Contents: ',data);

    return (
        <StColumnFlexDiv>
            <Board>
                {data.map((element) => {
                    return (
                        <Card>
                            {element.id}<br />
                            {element.title}<br />
                            {element.memo}<br />
                        </Card>
                    )
                })}
            </Board>
        </StColumnFlexDiv>
    )
}

export default Contents


const Board=styled.div`
    
`

const Card = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
`