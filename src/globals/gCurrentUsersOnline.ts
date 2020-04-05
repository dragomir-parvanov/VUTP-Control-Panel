import { BehaviorSubject } from "rxjs"

const gCurrentUsersOnline = new BehaviorSubject<number>(0)

setInterval(() => {
    gCurrentUsersOnline.next(gCurrentUsersOnline.getValue()+1)
},1000)

export default gCurrentUsersOnline