import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addTodo } from '../modules/todolist';
import { StRowFlexDiv } from '../styles';
import shortid from 'shortid';

function InputBar() {
    const titleRef = useRef('');
    const memoRef = useRef('');
    const dispatch = useDispatch();
    const a = useSelector((state) => state.todolist);
    console.log(a);
    const submit = (e) => {
        e.preventDefault();

        const addedData = {
            title: titleRef.current.value,
            memo: memoRef.current.value,
        }

        dispatch(addTodo(addedData));
        titleRef.current.value = '';
        memoRef.current.value = '';
    }

    return (
        <Wrap>
            <StForm onSubmit={submit}>
                <StRowFlexDiv style={{ justifyContent: 'space-between' }}>
                    <StRowFlexDiv style={{ gap: '5px' }}>
                        <input ref={titleRef} placeholder='Title' />
                        <input ref={memoRef} placeholder='Memo' />
                    </StRowFlexDiv>
                    <button type='submit'>Submit</button>
                </StRowFlexDiv>
            </StForm>
        </Wrap>

    )
}

export default InputBar;


const StForm = styled.form`
    background-color: green;
    padding: 20px;
`

const Wrap = styled.div`
    display: block;
`