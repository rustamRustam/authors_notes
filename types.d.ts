type Note = {
    id: number,
    text: string,
    sign: string,
    tz: string,
    date: Record<string,any>
}

type selectTimeZone = {
    id:number,
    nameTZ:string
}

type actionData = {
    type: string,
    note: Note,
    select_time_zone: selectTimeZone
}

type actionTimeZone = {
    type: string,
    time_zone: string[]
}

type actionSelectTimeZone = {
    type: string,
    select_time_zone: selectTimeZone
}
