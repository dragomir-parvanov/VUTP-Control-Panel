import { BehaviorSubject } from "rxjs";

const gServerLoad = new BehaviorSubject<number>(0)
setInterval(() => {
    gServerLoad.next(Math.random())
},500)
export default gServerLoad