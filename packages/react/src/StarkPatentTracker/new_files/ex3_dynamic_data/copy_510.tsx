import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1b77eab0-406a-494d-86b7-0c8fa23e6704', title: 'PATENT_TITLE_5508' },
        { id: '8839f573-f277-42c9-9204-17d46b58f0f8', title: 'PATENT_TITLE_6967' },
        { id: 'b36bc0b2-70e7-4513-8e7b-6df28f7e856f', title: 'PATENT_TITLE_6915' },
        { id: '298d39b3-6049-4533-8099-637ba131cdde', title: 'PATENT_TITLE_6538' },
        { id: 'cb327e21-fdf9-44d8-9733-afe1b70818e7', title: 'PATENT_TITLE_4548' },
        { id: 'ccaad5b4-1976-4400-8c77-4bbfe08287ef', title: 'PATENT_TITLE_8271' },
        { id: 'ab9d8d73-6e32-47c0-887c-91995c9f55b7', title: 'PATENT_TITLE_2809' },
        { id: '02684184-de08-4cb0-a53a-b92525449e92', title: 'PATENT_TITLE_7161' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App