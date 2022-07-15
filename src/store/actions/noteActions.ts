export function insertNote(_data_Note:Note) {
  const id_note = _data_Note.id;
  const tz =  _data_Note.tz;

  return (dispatch:any)=>{
      dispatch( {
        type: 'INSERT_NOTE',
        note: _data_Note,
      });


      const xhrCurrDateZone = new XMLHttpRequest();
      xhrCurrDateZone.open(
          "GET",
          "http://worldtimeapi.org/api/timezone/"+tz,
          true
      );

      const result = ()=>{
          if (xhrCurrDateZone.readyState === 4 && xhrCurrDateZone.status === 200) {
              let _date:Record<string,any>;
              _date = JSON.parse(xhrCurrDateZone.responseText);
              dispatch({
                type: 'INSERT_NOTE_DATE',
                note: {
                    id: id_note,
                    date: _date
                }
              })
          }
      }

      xhrCurrDateZone.addEventListener("readystatechange", result, true);
      xhrCurrDateZone.send();
  }
}
