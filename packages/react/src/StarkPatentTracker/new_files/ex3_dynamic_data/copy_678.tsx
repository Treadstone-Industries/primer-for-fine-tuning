import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '373d71e6-e7d4-41f3-a96e-47e373c53fc3', title: 'PATENT_TITLE_4214' },
        { id: '049e63f2-1e5b-4451-ad9e-13960c77f3ec', title: 'PATENT_TITLE_3811' },
        { id: '03abf289-a76f-4dd1-9650-a8f8e13c6299', title: 'PATENT_TITLE_5544' },
        { id: '5458433f-9576-4c4c-bb93-018e1849bd6d', title: 'PATENT_TITLE_6426' },
        { id: '8d414f64-829f-4e85-9bf6-bf78a1a61c38', title: 'PATENT_TITLE_1234' },
        { id: '6e1a8d73-256f-4e25-99f5-73a840acde04', title: 'PATENT_TITLE_7551' },
        { id: '25ac4a2f-617f-4b73-8cdc-dcbccf0639fd', title: 'PATENT_TITLE_1951' },
        { id: 'ab0031d7-1814-4505-b080-c7f7e43fd41b', title: 'PATENT_TITLE_3954' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App