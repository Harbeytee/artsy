import { useState, useEffect } from "react"

export default function countDown() {
    const [time, setTime] = useState(24015)
    useEffect(() => {
        if(time <= 0) {
          setTime(24015)
        }
        else {
              const timeout = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
            //console.log(time)
            return () => {
              clearInterval(timeout)
            }
    
        }
        
        
      }, [time])

    function showTime(val) {
        let hours = Math.floor(val / 3600)
        let minutes = Math.floor((val % 3600) / 60)
        let seconds = val % 60

    return `${hours}hr : ${minutes}mins : ${seconds}s`
    }
    
    return { showTime, time }
   
}
