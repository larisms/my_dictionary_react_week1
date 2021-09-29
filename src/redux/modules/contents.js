import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, } from "firebase/firestore";

const LOAD = "contents/LOAD"
const ADD = "contents/ADD"
const DELETE = "contents/DELETE"

//초기값
const initialState = {
    list: []
}


//액션크리에이터
export function loadList(dictionary_list) {
    return { type: LOAD, dictionary_list }
};

export function addList(new_dictionary) {
    return { type: ADD, new_dictionary }
};

export function deleteList(delete_dictionary) {
    return { type: DELETE, delete_dictionary }
};



// 미들웨어 (파이어스토어)
export const loadlistFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));


        let dictionary_list = [];

        dictionary_data.forEach((d) => {
            // dictionary_list = [...dictionary_list, {...d.data()}]; 아래 어레이 내장함수 push와 같은 결과
            dictionary_list.push({ id: d.id, ...d.data() });

        });
        dispatch(loadList(dictionary_list));
    }
};

export const addListFB = (dictionary) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dictionary"), dictionary);
        const _dictionary = await getDoc(docRef);
        const dictionary_data = { id: _dictionary.id, ..._dictionary.data() };

        dispatch(addList(dictionary_data));
    }
};

export const deleteListFB = (d_id) => {
    return async function (dispatch) {

        // window.alert("삭제되었습니다.")

        const docRef = await doc(db, "dictionary", d_id);
        console.log("aaa", docRef)
        await deleteDoc(docRef);

        dispatch(deleteList(d_id));
    }
}



//리듀서
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "contents/LOAD": {
            return { list: action.dictionary_list };
        }

        case "contents/ADD": {
            const new_dictionary_list = [...state.list, action.new_dictionary];
            return { list: new_dictionary_list };
        }

        case "contents/DELETE": {
            const new_dictionary_list = state.list.filter((d_id) => {
                const id = action.delete_dictionary;

                return id !== d_id;
            })
            window.location.reload();
            return { list: new_dictionary_list };
        }

        default:
            return state;
    }
}