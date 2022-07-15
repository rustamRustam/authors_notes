const initialState: {
    time_zone: string[],
    last_action: string
} = { time_zone: [], last_action: 'none' };

export function timeZoneReducer(state = initialState, action:actionTimeZone ) {

  switch (action.type) {
    case 'LOADED_TIMEZONE':
      return Object.assign({},state, {
          time_zone: action.time_zone,
          last_action: action.type
          });

    default:
      return Object.assign({},state, {
          last_action: action.type
        });
  }
}
