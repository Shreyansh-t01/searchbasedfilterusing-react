import { useEffect, useMemo, useState } from 'react'
import{useRecoilValue,RecoilRoot,useRecoilState} from 'recoil'

import './App.css'
import { informationAtom ,totalNotificationSelector} from './atom'
import axios from 'axios'
import { memo } from 'react'

function App() {

  console.log('app re-render')
  return (
    <>
    <RecoilRoot>
          <MainApp/>

    </RecoilRoot>
     
    </>
  )
}

function MainApp(){
  console.log('Mainapp re-render')
  const [info,setinfo] = useRecoilState(informationAtom)
  // useEffect(()=>{
  //      axios.get('http://localhost:3000/')
  //      .then((res)=>{
  //        setinfo(res.data.information)
  //      })
  // },[])
  return (
    <div style={{'display':'flex'}}>
      <button>Home {info.home}</button>
      <button>Notifications{info.notification}</button>
      <button>messages{info.message}</button>
      <button>jobs{info.jobs}</button>
      <Profile/>
    </div>
  )
}
const Profile = memo(()=>{
  console.log('profile render')
  // const notificationNumber = useRecoilValue(notificatonAtom)
  // const homeNumber = useRecoilValue(homeAtom)
  // const messageNumber = useRecoilValue(messageAtom)

  // this method only works if totalNotification par dependent koi koi aur variable na banana pad jay us case me ham selector recoil wala use karte hain

// const totalNotificationCount = useMemo(()=>{
//   return(
//    notificationNumber+homeNumber+messageNumber
//   )
// },[notificationNumber,homeNumber,messageNumber])


 
  const totalNotificationCount =  useRecoilValue(totalNotificationSelector)
 




 
  return(
    <div>
      <button>Me{totalNotificationCount}</button>
    </div>
  )
}
)
export default App
