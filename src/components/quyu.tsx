import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';

export const Quyu = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(0)
    useEffect(() => {
        const res = Number(num1) % Number(num2)
        setResult(res)
    }, [num1, num2])
    return (
        <div >
            <p className="py-3 text-xl">取余运算</p>
            <TextField id="outlined-basic" label="被除数" variant="outlined" value={num1} onChange={(e) => { setNum1(e.target.value) }} />
            <TextField id="outlined-basic" label="除数" variant="outlined" value={num2} onChange={(e) => { setNum2(e.target.value) }} />
            <TextField id="outlined-basic" label="余数" variant="outlined" value={result} />
        </div>
    )
}