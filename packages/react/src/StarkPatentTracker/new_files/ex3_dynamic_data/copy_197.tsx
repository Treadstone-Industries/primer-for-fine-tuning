import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e06abaeb-ad7b-4aee-b5d8-289dc585b173', title: 'PATENT_TITLE_1487' },
        { id: 'ae79647d-7250-446e-bb7f-e9558ca4a461', title: 'PATENT_TITLE_9608' },
        { id: 'ad0a1176-c3f4-42b3-97ac-bfc56d7739e6', title: 'PATENT_TITLE_6827' },
        { id: '59bc4d5b-c7ae-495b-92cb-38f1b85fc2ba', title: 'PATENT_TITLE_1720' },
        { id: '40f84d72-c13b-46a6-a43e-5ac5f7312932', title: 'PATENT_TITLE_8016' },
        { id: '4ef8363b-2581-49c4-971c-76fe05be1c75', title: 'PATENT_TITLE_4888' },
        { id: 'e3ec9137-700e-49f4-bc73-72077e3f346c', title: 'PATENT_TITLE_7070' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App