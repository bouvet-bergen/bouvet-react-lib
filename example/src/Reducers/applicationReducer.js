import { types } from '../Common/types';

const initialState = {
    components: [],
    modules: [],
    moduleNames: [],
    error: null,
    fetching: false   
};

export default function applicationReducer(state = initialState, action) {
    switch (action.type) {
        // Init application
        case types.application.INIT_APPLICATION:
            return { ...state, fetching: true, error: null }
        case types.application.INIT_APPLICATION_FAIL_OR_SUCCESS:
            return { ...state, fetching: false, error: action.payload.error, components: action.payload.components, modules: action.payload.modules, moduleNames: action.payload.moduleNames };
        default:
            return state;
    }
}
