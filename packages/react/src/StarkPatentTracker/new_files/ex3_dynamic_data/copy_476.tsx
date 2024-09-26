import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8bfdf205-9432-454f-91ac-c0d26fe1e2ad', title: 'PATENT_TITLE_7862' },
        { id: '813ff74f-8224-4dd9-be78-99a068e0aad3', title: 'PATENT_TITLE_8839' },
        { id: '1be9c110-00c5-485a-8f6e-94d638640993', title: 'PATENT_TITLE_6313' },
        { id: 'b79fc282-3c16-45bb-aa7d-454293eda1ae', title: 'PATENT_TITLE_4606' },
        { id: '2fc65324-b3e7-4a96-98e9-4793a96f450c', title: 'PATENT_TITLE_5516' },
        { id: '604b1d6e-6ada-40cc-9f49-896626aaa8d9', title: 'PATENT_TITLE_2614' },
        { id: '79f13006-4526-4eb2-922e-11e952891bec', title: 'PATENT_TITLE_3064' },
        { id: '655f70be-292c-45e3-a452-0e2aa05718ce', title: 'PATENT_TITLE_8650' },
        { id: 'aa3b2fb8-dc7c-44a3-be6a-76e4f6562b6a', title: 'PATENT_TITLE_8563' },
        { id: 'afdeae59-c4af-41d7-bc76-9b64d910e5b9', title: 'PATENT_TITLE_1777' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App