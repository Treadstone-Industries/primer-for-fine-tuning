import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a141c015-1387-4f10-b523-97e4358e8950', title: 'PATENT_TITLE_4642' },
        { id: '0b9a57fd-cebb-4f79-93c8-4e2ab4bfff54', title: 'PATENT_TITLE_6678' },
        { id: 'e3b73096-f72b-4b1b-b6a1-04aa6bf44d5a', title: 'PATENT_TITLE_1784' },
        { id: '6e66a9cc-feca-4223-909e-d1cf4e7e5433', title: 'PATENT_TITLE_4338' },
        { id: '5f3aa43d-669b-4d05-89a8-2f19fb04d47a', title: 'PATENT_TITLE_8974' },
        { id: '802fab4d-3830-42b1-ab8c-bdea952fbc14', title: 'PATENT_TITLE_7792' },
        { id: '544eac75-3e9c-4dfd-8610-1c9df4ae3e01', title: 'PATENT_TITLE_8417' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App