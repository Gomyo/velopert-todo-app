/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import React from 'react'

const ItemStyle = css`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-of-type(even) {
    background: #f8f9fa;
  }
`
const CheckboxStyle = ({ checked }) => css`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  // 체크했을 때 보여줄 스타일
  ${checked === true &&
  `
    svg {
      color: #22b8cf;
    }

    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  `}
`
const RemoveStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo
  return (
    <div css={ItemStyle}>
      <div css={CheckboxStyle({ checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text" onClick={() => onToggle(id)}>
          {text}
        </div>
      </div>
      <div css={RemoveStyle} onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default React.memo(TodoListItem)
