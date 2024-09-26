import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0b822d85-a3ae-47f0-b166-34e3ab19ea20', title: 'PATENT_TITLE_1822' },
        { id: 'e70f3417-bb5b-4186-ae98-9c296aef7bb2', title: 'PATENT_TITLE_1142' },
        { id: '23eefa93-3e10-4ec7-8d16-f107e8dadb26', title: 'PATENT_TITLE_9578' },
        { id: 'df78c1d1-ab7f-4468-8070-2bbe1d9ff6f7', title: 'PATENT_TITLE_8447' },
        { id: '54d989be-5635-4523-81b7-5d581df2e78b', title: 'PATENT_TITLE_6207' },
        { id: 'ead9343c-f77d-40f3-a0f7-3f420d09ef72', title: 'PATENT_TITLE_5538' },
        { id: 'f2ca37a7-9c3e-4166-9ed0-4a7624bc6462', title: 'PATENT_TITLE_4713' },
        { id: '9eafe28f-27d9-4413-b229-3fdcc46e8016', title: 'PATENT_TITLE_4644' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App