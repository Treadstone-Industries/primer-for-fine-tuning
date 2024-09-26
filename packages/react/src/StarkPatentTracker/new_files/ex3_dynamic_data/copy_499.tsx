import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9d17481c-ad3b-4868-a895-14e129da8195', title: 'PATENT_TITLE_5748' },
        { id: '2e46cef8-8ad5-468b-bbda-c75b40faa14f', title: 'PATENT_TITLE_7984' },
        { id: '44aa02a0-405d-4bad-8498-5c29fccbbff8', title: 'PATENT_TITLE_3407' },
        { id: 'b3a46bcd-cc99-4fa7-ad98-136f7935fe1c', title: 'PATENT_TITLE_4758' },
        { id: 'bdb80abb-98d9-4897-8a69-150ce3f438f5', title: 'PATENT_TITLE_8294' },
        { id: '33346288-47b9-4eda-bdf7-88a9960394a7', title: 'PATENT_TITLE_6410' },
        { id: '68a11431-3b62-43e1-b8ca-c80372675879', title: 'PATENT_TITLE_2612' },
        { id: '5b5b47b3-1389-4ebe-a989-c9fe727c7cbb', title: 'PATENT_TITLE_6737' },
        { id: '1b787e35-436d-40e8-b488-ff00d4605fa5', title: 'PATENT_TITLE_4510' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App