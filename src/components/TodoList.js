/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import TodoListItem from './TodoListItem'

const ListStyle = css`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div>
      <div css={ListStyle}>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
