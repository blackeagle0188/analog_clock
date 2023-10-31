const initialState = {
    currentDate: new Date(),
};

export default function ClockReducer(state = initialState, action) {
    switch (action.type) {
        case "DO_THIS":
            return {
                ...state,
                currentDate: action.payload,
            };
        default:
            return state;
    }
}