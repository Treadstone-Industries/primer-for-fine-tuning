import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '772d331a-f09a-4802-9021-640fef37ce5d', title: 'PATENT_TITLE_8308' },
        { id: 'a537b9ad-5519-4487-9581-869d94eea322', title: 'PATENT_TITLE_6294' },
        { id: '62e35f46-1ded-49ab-b0a9-002a33676abe', title: 'PATENT_TITLE_3468' },
        { id: '95cbf186-0e9f-409c-bb8e-bdcdf7741826', title: 'PATENT_TITLE_1376' },
        { id: 'ec8bcba0-bc91-4f9d-b3ba-da29030d51d2', title: 'PATENT_TITLE_4473' },
        { id: '38b7d7f8-1683-49e9-8f36-14118f8f05fe', title: 'PATENT_TITLE_2030' },
        { id: '56dbc59e-d9c5-4e17-8a56-f14cc0666b5d', title: 'PATENT_TITLE_2534' },
        { id: 'b8e55cbf-251f-4b69-970b-b61c8297e105', title: 'PATENT_TITLE_4836' },
        { id: '63480555-eef8-4cc5-96f2-b3a6e68c0af4', title: 'PATENT_TITLE_1548' },
        { id: '35e2ce30-a6fd-4f9a-8f6b-20107a419324', title: 'PATENT_TITLE_5456' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App