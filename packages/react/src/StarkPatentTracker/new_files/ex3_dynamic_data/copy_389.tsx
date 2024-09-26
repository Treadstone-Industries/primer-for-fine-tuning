import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a9bcdaed-e239-422a-9915-dd3ae7deafbf', title: 'PATENT_TITLE_1829' },
        { id: '0a87bdcb-ea11-4c95-ac82-828e05ee433b', title: 'PATENT_TITLE_1624' },
        { id: '914e4066-5660-4843-8ac0-b133c4d170ed', title: 'PATENT_TITLE_1096' },
        { id: 'adb48983-6237-4476-a332-13808a4f8ad0', title: 'PATENT_TITLE_6353' },
        { id: '2115551c-7dcd-4b89-b338-fdeac68b6bb4', title: 'PATENT_TITLE_5672' },
        { id: '7f5bd012-188c-481b-9bea-dc2d25a76529', title: 'PATENT_TITLE_9390' },
        { id: '810eb0f1-43f3-4cd0-ae6b-01d19eef1941', title: 'PATENT_TITLE_8192' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App