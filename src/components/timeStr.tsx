import { useEffect, useState } from "react"
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const Timestamp = () => {

    const [timestamp, setTimeStamp] = useState(Math.floor(Date.now() / 1000))
    const [formatTime, setFormat] = useState('')

    const [formatTime2, setFormat2] = useState(dayjs.unix(Date.now() / 1000).format('YYYY-MM-DD HH:mm:ss'))
    const [result2, setResult2] = useState(0)
    useEffect(() => {
        setFormat(dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss'))
    }, [timestamp])
    useEffect(() => {
        setResult2(dayjs(formatTime2).unix())
    }, [formatTime2])
    return (
        <div >
            <p className="py-3 text-xl">时间戳转换</p>
            <TextField id="outlined-basic" label="时间戳" variant="outlined" value={timestamp} onChange={(e) => { setTimeStamp(Number(e.target.value)) }} />
            <ArrowRightAltIcon sx={{ fontSize: 50 }} />
            <TextField id="outlined-basic" label="时间" variant="outlined" value={formatTime} />
            <p className="py-3" />
            <TextField id="outlined-basic" label="时间" variant="outlined" value={formatTime2} onChange={(e) => { setFormat2(e.target.value) }} />
            <ArrowRightAltIcon sx={{ fontSize: 50 }} />
            <TextField id="outlined-basic" label="时间戳" variant="outlined" value={result2} />

        </div>
    )
}   