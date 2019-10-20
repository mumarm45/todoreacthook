


function reducer(state, action) {
    switch (action.type) {
        case 'add':
                const newId = Math.max.apply(null, state.list.map((t) => t.id)) + 1;
                const newToDo = { id: newId, name: action.payload };
            return {
                list: [...state.list, newToDo]
            }
        case 'delete':
            return {
                    list: state.list.filter(item => item.id !== action.payload)
            }
        case 'changeStatus':
                return {
                        list: state.list.map(item => {
                            if(item.id === action.payload) {item.isCompleted=!item.isCompleted} return item
                        })
                }
        case 'getAll':
            return {
                    list: state.list
            }
        default:
            return state;
    }
}

export default reducer;