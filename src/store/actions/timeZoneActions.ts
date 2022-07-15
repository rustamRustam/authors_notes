export function loadedTimeZone(_dataTZ:string[]) {
  return {
    type: 'LOADED_TIMEZONE',
    time_zone: _dataTZ,
  };
}

export function selectTimeZone(_selectTZ:selectTimeZone) {
  return {
    type: 'SELECT_TIMEZONE',
    select_time_zone: _selectTZ,
  };
}
