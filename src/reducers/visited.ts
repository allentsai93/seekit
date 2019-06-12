const visited = (state: any = [], action: any) => {
  switch (action.type) {
    case "VISITED_LISTING":
      return [...state, action.payload];
    case "SHOW_VISITED":
      return state;
    default:
      return state;
  }
};

export default visited;
