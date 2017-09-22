export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM'  
}

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    payload: {item: item}
})

export const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: {id: id}
})
