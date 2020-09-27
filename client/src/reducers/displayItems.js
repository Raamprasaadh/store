var AvailableItems = [{"Name":"Maggi",Price:"20"},{"Name":"Jim-Jam",Price:"10"},
{"Name":"Cheese",Price:"75"},{"Name":"Coffee",Price:"200"}];

const displayItems=(state=AvailableItems,action)=>{
switch (action.type) {
    case 'DISPLAY_ITEMS':
        return state;
        break;

    default:
        return state;
        break;
}
}

export default displayItems;