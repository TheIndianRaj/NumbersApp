import {SELECT_FORMULA, TOGGLE_LIST } from '../actions/types';

const initialState = {
    isShowList: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_FORMULA:
            
        case TOGGLE_LIST:
            return { ...state, isShowList: !state.isShowList };
        default:
            return state;
    }
}

export default reducer;