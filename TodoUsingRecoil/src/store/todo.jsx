import {atom,selector} from 'recoil'

// export const title=  atom({
//     key:"title",
//     default:"title"
// })

// export const description = atom({
//     key:"description",
//     default:"description"
// })
 

export const todoList = atom({
    key:"todolist",
    default:[]
})
export const inputAtom = atom({
    key:"input",
    default:""
})

export const filterTodoList = atom({
    key:"filterTodoList",
    default:[
        
    ]

    
})