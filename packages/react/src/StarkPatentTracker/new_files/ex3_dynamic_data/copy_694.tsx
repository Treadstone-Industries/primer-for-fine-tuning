import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b65fb6ae-189c-45fc-afce-4d07f6c230be', title: 'PATENT_TITLE_2559' },
        { id: '311190a0-2505-45b7-a0e4-e442682459ca', title: 'PATENT_TITLE_6532' },
        { id: '145aed4e-0bcf-40dd-bd24-b0087538eda1', title: 'PATENT_TITLE_5920' },
        { id: '59eb3bf2-59b2-47fc-a1c1-f2ba2b85becd', title: 'PATENT_TITLE_4397' },
        { id: '2244e801-deb5-4fc1-b02e-54289bb3fe83', title: 'PATENT_TITLE_3955' },
        { id: 'c19371c1-b1bb-4708-9ccf-7d673f6cef2f', title: 'PATENT_TITLE_5384' },
        { id: '69da892f-ded6-44fe-bf10-8f9df756002c', title: 'PATENT_TITLE_1583' },
        { id: '2990abaa-39a4-4af2-a378-c8b38c5368cd', title: 'PATENT_TITLE_1857' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App