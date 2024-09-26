import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3b1046bd-86e3-4952-9cc4-2af88d961645', title: 'PATENT_TITLE_3504' },
        { id: '32d7e7cf-0d07-4231-809a-0abdf2ab12e4', title: 'PATENT_TITLE_8769' },
        { id: '57d864a3-fa05-47f5-a4ee-49e0628030b4', title: 'PATENT_TITLE_8372' },
        { id: '9c7fa513-b00b-481f-b433-ce4cdbefd61e', title: 'PATENT_TITLE_2193' },
        { id: '8e6688ab-d5f6-44d3-9303-244f3bc464ab', title: 'PATENT_TITLE_9113' },
        { id: 'd3dd3ae8-5386-4cb2-a400-14990124d981', title: 'PATENT_TITLE_4055' },
        { id: '549f24df-0bc5-4709-a563-bd6493dfe689', title: 'PATENT_TITLE_4835' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App