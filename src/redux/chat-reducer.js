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
    messagesFlood: [
        {id: 1, message: 'У кого какие планы на выходные?', sender: 5},
        {id: 2, message: 'Дома сидеть', sender: 2},
        {id: 3, message: 'Нет планов', sender: 4},
        {id: 4, message: 'А что?', sender: 1},
        {id: 5, message: 'Подумала, может собраться вместе', sender: 5},
        {id: 6, message: 'Я - за!', sender: 2},
        {id: 7, message: 'Почему бы и нет', sender: 4},
        {id: 8, message: 'Какие у вас любимые увлечения?', sender: 1},
        {id: 9, message: 'Я очень люблю петь и танцевать.', sender: 3},
        {id: 10, message: 'Обожая спорт', sender: 4},
        {id: 11, message: 'Тоже люблю спорт', sender: 1},
        {id: 12, message: 'Моё хобби - рисовать', sender: 5},
        {id: 13, message: 'Ещё люблю фотографировать', sender: 1},
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
    messagesWork: [
        {id: 1, message: 'Это рабочий чат, сюда только по важным рабочим темам', sender: 5},
        {id: 2, message: 'Принято', sender: 2},
        {id: 3, message: 'Так точно!', sender: 4},
        {id: 4, message: 'Вас понял!', sender: 1},
        {id: 5, message: 'Вот и славненько', sender: 5},
        {id: 6, message: 'как же хочется работу', sender: 5},
        {id: 7, message: 'Прошу прощения, тут принтер заживало. Надо бы починить', sender: 4},
        {id: 8, message: 'Разберёмся', sender: 1},
        {id: 9, message: 'Как освобожусь - гляну', sender: 3},
        {id: 10, message: 'Работа, работа, работа, работа, работа', sender: 4},
        {id: 11, message: 'Работа, работа, работа, работа, работа', sender: 1},
        {id: 12, message: 'Работа, работа, работа, работа, работа', sender: 5},
        {id: 13, message: 'Фантазия кончается', sender: 1},
        {id: 14, message: 'Фантазия кончилась', sender: 2},
        {id: 15, message: 'Нужно 2 человека поработать в выходные, ставка х2.Есть желающие?', sender: 4},
        {id: 16, message: '«Я хочу', sender: 3},
        {id: 17, message: 'И я', sender: 2},
        {id: 18, message: 'Вот и славно', sender: 4},
        {id: 19, message: 'как же хочется работу', sender: 3},
        {id: 20, message: 'Поступило предложение купить наш аллюминиевый завод. Что решаем?', sender: 1},
        {id: 21, message: 'Продаём', sender: 3},
        {id: 22, message: 'Продаём', sender: 4},
        {id: 23, message: 'Продаём', sender: 1},
        {id: 24, message: 'Единогласно!', sender: 5}
    ]
}
const chatReducer = (state = initialState, action) => {
    const body = action.payload;
    switch (action.type) {
        case SEND_MESSAGE:
            if (body.chatType ==="work") {
            return {
                    ...state,
                    messagesWork: [...state.messagesWork, {id: state.messagesWork.length + 1, message: body.newMessageBody, sender: 1}]
                }
            } else {
                return {
                    ...state,
                    messagesFlood: [...state.messagesFlood, {id: state.messagesFlood.length + 1, message: body.newMessageBody, sender: 1}]
                }
            }
        case DELETE_MESSAGE:
            if (body.chatType ==="work") {
                return {...state, messagesWork: state.messagesWork.filter(p => p.id != body.id)}
            } else {
                return {...state, messagesFlood: state.messagesFlood.filter(p => p.id != body.id)}
            }
        case EDIT_MESSAGE:
            if (body.chatType === "work") {
                return {
                    ...state, messagesWork: state.messagesWork.map(p => (p.id === body.id) ?
                        {...p, message: body.newMessage} : p)
                }
            } else {
                return {
                    ...state, messagesFlood: state.messagesFlood.map(p => (p.id === body.id) ?
                        {...p, message: body.newMessage} : p)
                }
            }
        default:
            return state
    }
}
export const sendMessageCreator = (chatType,newMessageBody) => ({type: SEND_MESSAGE, payload:{chatType,newMessageBody}})
export const deleteMessageCreator = (chatType,id) => ({type: DELETE_MESSAGE,payload:{chatType,id}})
export const editMessageCreator = (chatType,id,newMessage) => ({type: EDIT_MESSAGE, payload:{chatType,id,newMessage}})
export default chatReducer