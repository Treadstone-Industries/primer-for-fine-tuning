import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f0aef998-0809-44c2-ac6c-c192e89f9fe6', title: 'PATENT_TITLE_1155' },
        { id: '4db95c26-c69e-40ed-b387-b78efc4e75a0', title: 'PATENT_TITLE_6172' },
        { id: '74072e97-6179-4e4c-abcf-e5e910aa469a', title: 'PATENT_TITLE_7112' },
        { id: '02b6cab7-8d09-41ef-8112-e4ab82769d3d', title: 'PATENT_TITLE_1097' },
        { id: '5aae503e-bd3a-4fb5-a3bf-404697ce4eba', title: 'PATENT_TITLE_2949' },
        { id: '7180fd18-798f-47ba-878d-b73fe76c9312', title: 'PATENT_TITLE_6834' },
        { id: 'ebd1f850-25ec-4098-bc0d-57b23630c443', title: 'PATENT_TITLE_6433' },
        { id: '578465e9-6ae2-427f-b327-09b926984324', title: 'PATENT_TITLE_6542' },
        { id: '633783ab-91e2-4a08-af30-33434b1f0ac4', title: 'PATENT_TITLE_4188' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App