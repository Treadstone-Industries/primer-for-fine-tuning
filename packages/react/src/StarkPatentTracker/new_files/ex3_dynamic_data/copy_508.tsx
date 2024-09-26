import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cca74284-f1ac-4602-8bf8-adb2543a789d', title: 'PATENT_TITLE_1497' },
        { id: '5d2a7926-2e59-4ebf-822c-8ebab3797e3a', title: 'PATENT_TITLE_3596' },
        { id: '651bf552-4f68-47da-8089-7f7f373967fd', title: 'PATENT_TITLE_5850' },
        { id: '002aa15c-cfa2-4a83-921c-029ad049637a', title: 'PATENT_TITLE_5357' },
        { id: '67f9757d-8081-4ad8-a9bf-dddaa74c5256', title: 'PATENT_TITLE_6175' },
        { id: 'bfebf929-40a5-48f7-bf4d-4f9d24724ee2', title: 'PATENT_TITLE_8976' },
        { id: '7aafb100-d8e2-474d-bbf1-66b2094c11e8', title: 'PATENT_TITLE_6139' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App