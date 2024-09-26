import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'daf96ad8-012d-46bd-a0ad-c6aa2bdfbbbc', title: 'PATENT_TITLE_8922' },
        { id: 'fe320868-f3a9-4bba-9e54-21073e194d5c', title: 'PATENT_TITLE_2294' },
        { id: '4068b346-cf96-4722-b11b-14c80cf88ddb', title: 'PATENT_TITLE_6883' },
        { id: '658988b7-5d1d-414b-8daa-327ce7ed69d5', title: 'PATENT_TITLE_4106' },
        { id: '80450455-1deb-4ae3-9192-5f69a60815c4', title: 'PATENT_TITLE_3961' },
        { id: 'bd8c11ac-c840-4a5e-b632-43c13993896b', title: 'PATENT_TITLE_2014' },
        { id: '5da1cfa1-5a89-40ae-ac2c-5e8127159656', title: 'PATENT_TITLE_6274' },
        { id: 'ccba75eb-995d-472b-9a4c-fc5222ecbc7b', title: 'PATENT_TITLE_2481' },
        { id: '75cc86b1-f273-4905-9d64-dc9dda95704e', title: 'PATENT_TITLE_8169' },
        { id: '459ca09b-bf96-4e78-8be9-cc73759c1dd6', title: 'PATENT_TITLE_8285' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App