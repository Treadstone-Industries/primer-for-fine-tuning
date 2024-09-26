import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ca1e8c35-a804-4d84-b718-9a8d95ba464a', title: 'PATENT_TITLE_2332' },
        { id: '3b1821d1-887f-4c2a-88da-e00f9300b944', title: 'PATENT_TITLE_6354' },
        { id: '154cba60-ec6e-4f5c-ad36-fd25f38b2f06', title: 'PATENT_TITLE_6215' },
        { id: '060778d6-3a18-49be-b843-0f4ee7d8b726', title: 'PATENT_TITLE_6502' },
        { id: 'ead2ae55-f472-482a-90e2-37516a43e7ed', title: 'PATENT_TITLE_8739' },
        { id: 'c15bbb6a-7cc8-4b2d-ae3e-5230b1e37b0b', title: 'PATENT_TITLE_9598' },
        { id: '4d9f84b4-9185-47a3-954b-f02824857fa3', title: 'PATENT_TITLE_1875' },
        { id: '0b259786-90bd-4724-8373-6460cf4c11fd', title: 'PATENT_TITLE_3846' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App