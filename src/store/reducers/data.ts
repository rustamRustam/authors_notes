const initialState: {
    notes: Note[],
    select_time_zone: selectTimeZone
} = {
    notes: [],
    select_time_zone: {id:-1, nameTZ:''}
};


export function dataReducer(state = initialState, action:actionData ) {
  switch (action.type) {
    case 'INSERT_NOTE':

      return Object.assign({},state, {
          notes: [
                  ...state.notes,
                  action.note
              ]
          });
    case 'INSERT_NOTE_DATE':
        let new_state = Object.assign({},state);
        new_state.notes.some((_note)=>{
            if(_note.id === action.note.id) {
                _note.date = action.note.date;
                return true;
            }
            return false;
        });

        return new_state;

    case 'SELECT_TIMEZONE':
      return Object.assign({},state, {
            select_time_zone: action.select_time_zone
        });

    default:
      return state;
  }
}
