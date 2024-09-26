import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd39850be-7d23-4239-9e17-d0c87c31c4f9', title: 'PATENT_TITLE_8053' },
        { id: '41ca64bd-c943-4e80-9891-4138563599fa', title: 'PATENT_TITLE_7788' },
        { id: '4ab2d8de-2b0e-404a-8d95-b625efc907ea', title: 'PATENT_TITLE_5174' },
        { id: '50497f64-19fd-4055-acde-088d62d92ef8', title: 'PATENT_TITLE_4513' },
        { id: '9c7488b8-0dd8-4c80-876d-fe5e0322aaec', title: 'PATENT_TITLE_4445' },
        { id: 'a0fcbd89-8dc5-42c0-919e-dbc94a1bcfa1', title: 'PATENT_TITLE_5939' },
        { id: '99e82e86-e981-4bbc-93f2-7b319d34f95c', title: 'PATENT_TITLE_4960' },
        { id: '73231a83-8637-4ded-b203-7c3704e1b19f', title: 'PATENT_TITLE_2147' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App