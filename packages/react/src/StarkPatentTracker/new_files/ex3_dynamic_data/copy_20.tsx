import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ba3fc1cd-fcab-4850-bb6f-4a299b4d1078', title: 'PATENT_TITLE_3605' },
        { id: '0b864784-3172-4475-9528-59cebb55f243', title: 'PATENT_TITLE_4659' },
        { id: 'dd03bd8f-ebaa-4764-afcc-aa001d7df845', title: 'PATENT_TITLE_4566' },
        { id: 'de09ace3-8d23-4ce2-b72b-9da0b247a06c', title: 'PATENT_TITLE_2209' },
        { id: 'd161071b-193c-4a91-a2be-f9f5672ab2fc', title: 'PATENT_TITLE_1703' },
        { id: 'f397b447-e97a-4d00-8969-d94930b505f4', title: 'PATENT_TITLE_5211' },
        { id: '8c027193-3f29-4955-90b7-cb395505be24', title: 'PATENT_TITLE_1382' },
        { id: '624e396f-b10d-4781-a72e-d56f13c08336', title: 'PATENT_TITLE_2439' },
        { id: '697a2ceb-ddd3-4385-ad7a-4a4714097728', title: 'PATENT_TITLE_7030' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App