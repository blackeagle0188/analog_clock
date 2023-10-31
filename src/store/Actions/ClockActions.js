export const setClockData = (clockData) => {
    return (dispatch) => {
        dispatch({ type: "DO_THIS", payload: clockData })
    };
};