export const addCounter = (counter) => {
    return {
      type: "ADD_COUNTER",
      counter,
    };
};

export const subCounter = (counter) => {
    return {
      type: "SUB_COUNTER",
      counter,
    };
};