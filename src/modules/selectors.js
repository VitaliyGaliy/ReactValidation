import { createSelector } from 'reselect'

export const getAdvts = state => state.advts
export const getAdvtId = props => props.params._id
export const getQAdvts = props => props.advts
export const getCurrentPage = props => props.pagination.currentPage
export const getTodosPerPage = props => props.pagination.todosPerPage


export const getAdvt = createSelector(
  [getAdvts, getAdvtId],
  (advts, id) => advts.find(a => a.id === id)
)

//Логика пагинации

export const getIndexOfLastTodo = createSelector(
  [getCurrentPage, getTodosPerPage],
  (Page, TodosPerPage) => Page * TodosPerPage
)

export const getIndexOfFirstTodo = createSelector(
  [getIndexOfLastTodo, getTodosPerPage],
  (LastTodo, TodosPerPage) => LastTodo - TodosPerPage
)

export const getCurrentTodos = createSelector(
  [getIndexOfFirstTodo, getIndexOfLastTodo, getQAdvts],
  (first, last, q) => q.slice(first, last)
)

export const getPageNumbers = createSelector(
  [getQAdvts, getTodosPerPage],
  (q, todos) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(q.length / todos); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers
  }
)

export default {
  getAdvt,
  getCurrentPage,
  getIndexOfLastTodo,
  getIndexOfFirstTodo,
  getCurrentTodos,
  getPageNumbers
}
