import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ac563ae2-e12b-42f5-8d47-0833ad6599bd', title: 'PATENT_TITLE_8061' },
        { id: '7d9f3904-81c0-4fd7-adb7-971db969b3c6', title: 'PATENT_TITLE_4950' },
        { id: '1eade6d1-b1a8-4073-b5f7-ce7894ae3ffd', title: 'PATENT_TITLE_5424' },
        { id: '0cc8e9ba-95da-415f-8db6-40cbf9e0e2c6', title: 'PATENT_TITLE_8314' },
        { id: '9c1a9121-d01a-4d11-a1b8-3d8c35366194', title: 'PATENT_TITLE_1759' },
        { id: 'd8ecc946-685e-414e-84d9-4897cdb8ba27', title: 'PATENT_TITLE_8010' },
        { id: 'de08d8b9-bf92-4b39-9fc3-b17c734d5c43', title: 'PATENT_TITLE_1926' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App