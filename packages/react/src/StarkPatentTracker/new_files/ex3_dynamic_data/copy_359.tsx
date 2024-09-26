import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '93888d24-004d-49c1-98c3-561c13cc0af7', title: 'PATENT_TITLE_5897' },
        { id: '0257343b-2287-4d8b-bf5e-a49fbf0b81ef', title: 'PATENT_TITLE_2297' },
        { id: '393abcc0-2da7-4e34-9e55-1ad18edc3ee8', title: 'PATENT_TITLE_2621' },
        { id: '7d5e290f-dfca-4963-9b7f-cb6fc20a7a27', title: 'PATENT_TITLE_6889' },
        { id: '29bdf862-c75d-445b-a1dc-5e14e51810f3', title: 'PATENT_TITLE_5999' },
        { id: '9dc87d20-0ef2-44ad-8ed1-10e44652d1ae', title: 'PATENT_TITLE_4187' },
        { id: '7b7b69a7-ff72-4f10-b3d7-245b9e3f1d0a', title: 'PATENT_TITLE_6440' },
        { id: 'b485f636-c507-49ac-9149-e4b7c80adc41', title: 'PATENT_TITLE_9821' },
        { id: '0a76721b-4af5-40a0-b798-507aa56ba99f', title: 'PATENT_TITLE_1691' },
        { id: 'a6936253-29f6-40bc-ab41-9f4ee5dbbf82', title: 'PATENT_TITLE_7410' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App