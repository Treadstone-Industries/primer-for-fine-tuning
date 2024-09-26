import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7310145a-7f5a-44fc-9302-3f95a73482fc', title: 'PATENT_TITLE_7253' },
        { id: '3e20f61d-501e-400d-8db4-7a4d61adb9f1', title: 'PATENT_TITLE_1984' },
        { id: '861e0072-e4ef-4491-843d-f6a7ff714302', title: 'PATENT_TITLE_2024' },
        { id: '83c7faca-160e-4a6c-ad07-91101a04c689', title: 'PATENT_TITLE_4343' },
        { id: '14f5edbf-8224-4522-bdfd-a85e5cba7e43', title: 'PATENT_TITLE_2988' },
        { id: '24ed2f84-2c5f-43d9-8600-c0836f41f5b0', title: 'PATENT_TITLE_4916' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App