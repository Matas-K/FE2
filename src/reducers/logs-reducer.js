import { ADD_LOG_EVENT } from "../actions/logs-acions";

const initialLogsState = [];

export const logsReducer = (state = initialLogsState, action) => {
    switch (action.type) {
        case ADD_LOG_EVENT:
            return [ ...state, action.event ];

        default:
            return state;
    }
};