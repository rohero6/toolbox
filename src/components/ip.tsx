import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const Ip = () => {
    const [ip, setIp] = useState('')
    const [loc, setLoc] = useState('')
    const getIp = async () => {
        const url = 'https://qifu-api.baidubce.com/ip/geo/v1/district?ip=' + ip
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
        })
        if (resp.ok) {
            const jsonData = await resp.json();
            const desc = jsonData.data.country + " " + jsonData.data.prov + " " + jsonData.data.city + " " + jsonData.data.district
            setLoc(desc)
        }
    }
    return (
        <div>
            <p className="py-3 text-xl">Ip归属地查询</p>
            <div className="flex items-center">
                <TextField id="outlined-basic" label="Ip" variant="outlined" value={ip} onChange={(e) => { setIp(e.target.value) }} />
                <ArrowRightAltIcon sx={{ fontSize: 50 }} />
                <TextField id="standard-basic" label="归属地" variant="outlined" value={loc} className="w-60" />
                <div className="px-3" />
                <Button variant="contained" color="success" endIcon={<BoltIcon />} className="px-2"
                    onClick={() => { getIp() }}
                >查询</Button>
            </div>
        </div>
    )
}