const SEND_MESSAGE = "SEND-MESSAGE";
const DELETE_MESSAGE = "DELETE-MESSAGE"
const EDIT_MESSAGE = "EDIT-MESSAGE"
const REVERSE_MESSAGE ="REVERSE_MESSAGE"

let initialState = {
    users: [
        {senderId: 0, name: 'Тестовый профиль', profileImg: "https://cdn.hipwallpaper.com/i/14/36/FA8iOV.jpg"},
        {
            senderId: 1,
            name: 'Yulia',
            profileImg: "https://avatars.mds.yandex.net/get-zen_doc/229614/pub_5db308ea5ba2b500b6bb0d1d_5db309208d5b5f00afb1fe92/scale_1200"
        },
        {senderId: 2, name: 'Egor', profileImg: "https://static1.bigstockphoto.com/6/5/1/large1500/15601130.jpg"},
        {
            senderId: 3,
            name: 'Sasha',
            profileImg: "https://yt3.ggpht.com/ytc/AAUvwnjoWSUD_sN4qv6h-6aDmJcS8WzE0mz5dkh8gA5J=s900-c-k-c0x00ffffff-no-rj"
        },
        {senderId: 4, name: 'Katya', profileImg: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},
    ],
    messages: [
        {id: 1, message: 'Единогласно!', sender: 5},
        {id: 2, message: 'Продаём', sender: 2},
        {id: 3, message: 'Продаём', sender: 4},
        {id: 4, message: 'Продаём', sender: 1},
        {id: 5, message: 'Поступило предложение купить наш аллюминиевый завод. Что решаем?', sender: 5},
        {id: 6, message: 'как же хочется работу', sender: 5},
        {id: 7, message: 'Ноль идей', sender: 4},
        {id: 8, message: 'Прошу прощения, тут принтер заживало… Не знаете как с этим справиться?', sender: 1},
        {id: 9, message: 'Привет', sender: 3},
        {id: 10, message: 'Здравствуйте', sender: 4},
        {id: 11, message: 'Всем привет', sender: 1},
        {id: 12, message: 'Slaaave', sender: 5},
        {id: 13, message: 'Не листайте дальше. Данные 2 чата являются одним массивом но показываются с разных концов', sender: 1},
        {id: 14, message: 'Всем привет, как вам погода?', sender: 2},
        {id: 15, message: 'Привет, супер', sender: 4},
        {id: 16, message: '«Разговор о погоде — последнее убежище людей, лишенных воображения» — Оскар Уайльд.', sender: 3},
        {id: 17, message: 'Понятно', sender: 2},
        {id: 18, message: '...', sender: 5},
        {id: 19, message: 'хихи', sender: 3},
        {id: 20, message: 'Покидайте факты о котах пожалуйста', sender: 1},
        {id: 21, message: 'Кошка не способна потеть. Увлажняется только подушечка лапы.', sender: 3},
        {id: 22, message: 'Австралия является страной, в которой около 90% жителей поселили в своих домах кошек.', sender: 4},
        {id: 23, message: 'Сердце кошки бьется около 140 ударов в минуту. Для сравнения, человеческое сердце бьется в среднем 75 ударов в минуту.', sender: 1},
        {id: 24, message: 'У всех кошек дальнозоркость, поэтому им тяжело разглядеть предметы, находящиеся рядом.', sender: 5}
    ],
    flood: true
}
const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages, {id: state.messages.length + 1, message: body, sender: 1}]
                }
        case DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(p => p.id != action.id)}
        case EDIT_MESSAGE:
            debugger;
            return {
                ...state, messages: state.messages.map(p => (p.id === action.payload.id)?
                    {...p ,message: action.payload.newMessage} : p)
            }
        case REVERSE_MESSAGE:
            debugger
            return {
                ...state, flood: action.body
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const deleteMessageCreator = (id) => ({type: DELETE_MESSAGE, id})
export const editMessageCreator = (id,newMessage) => ({type: EDIT_MESSAGE, payload:{id,newMessage}})
export const reverseMessageCreator = (body) => ({type: REVERSE_MESSAGE, body})
export default chatReducer