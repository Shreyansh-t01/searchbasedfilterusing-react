import {atom,selector} from 'recoil'
import axios from 'axios'


export const informationAtom = atom({
    key:"informationAtom",
    default:selector({
        key:"informationgetter",
        get:async()=>{
            const response = await axios.get('http://localhost:3000/')
            return response.data.information
        }
    })
     


})
export const totalNotificationSelector = selector({
    key:"totalNotification",
    get:({get})=>{

        const informationCount = get(informationAtom)
        const messageCount =(informationCount.message)
        const notificationCount = (informationCount.notification)
        const homeCount = (informationCount.home)
        const jobCount = (informationCount.jobs)

        return(messageCount+notificationCount+homeCount+jobCount)
    }
})