import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c6cba949-4ff0-43c2-8718-26b14f0895b6', title: 'PATENT_TITLE_9951' },
        { id: 'ee9dbd06-1601-4d60-8ae0-0041f934a2fa', title: 'PATENT_TITLE_7416' },
        { id: 'b91da67a-cce7-48ac-9211-c683513c8bf4', title: 'PATENT_TITLE_3904' },
        { id: 'dc279771-50d2-4ce8-9de6-1adc6283f639', title: 'PATENT_TITLE_8809' },
        { id: '6b2d6895-02ef-4dd6-bf89-3d82bd2ff3e1', title: 'PATENT_TITLE_8940' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App