import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd484b4ed-b011-49e1-8eea-9aa305a65497', title: 'PATENT_TITLE_1463' },
        { id: '34507b55-02e9-42dc-ab3f-c71b92b3e9e0', title: 'PATENT_TITLE_5499' },
        { id: '8803af59-4f69-43fc-bf6b-e3e2e5029a49', title: 'PATENT_TITLE_7179' },
        { id: '359753b4-4a97-4c99-bbee-69681cb628a3', title: 'PATENT_TITLE_6099' },
        { id: '3ee988f1-6c06-47d9-a686-5c1e0aa1bc7a', title: 'PATENT_TITLE_1995' },
        { id: 'a77c5826-f0b4-47a0-8dc0-601c788ff751', title: 'PATENT_TITLE_8644' },
        { id: '80c7c7b6-b6ae-46b9-9e7f-938fee27976c', title: 'PATENT_TITLE_5434' },
        { id: 'd9c2937b-00a5-4ee2-a72b-598fd79381db', title: 'PATENT_TITLE_8353' },
        { id: '2f90e0cc-3624-4cb0-adec-cfef5a28ce48', title: 'PATENT_TITLE_6083' },
        { id: 'f9211a26-9da4-4bb3-95c8-03af9f893867', title: 'PATENT_TITLE_4676' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App