/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'

const FormStyle = css`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1; // 버튼 제외 영역 모두 차지
  }
  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  const onSubmit = useCallback(
    (e) => {
      onInsert(value)
      setValue('')
      e.preventDefault() // Prevent refresh cuz of submit event
    },
    [onInsert, value],
  )

  return (
    <div>
      <form css={FormStyle} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  )
}

export default TodoInsert
