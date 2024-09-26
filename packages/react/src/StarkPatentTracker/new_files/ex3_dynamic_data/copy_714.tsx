import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c62dac46-93b0-4225-a7ab-7018aab22735', title: 'PATENT_TITLE_2161' },
        { id: 'bfb8cf1e-13d6-4485-8fb4-00b0103362f3', title: 'PATENT_TITLE_6350' },
        { id: 'aeaff414-5967-4a2f-909c-cda1727bad64', title: 'PATENT_TITLE_2957' },
        { id: '25c9cd79-fdf2-4ad7-9395-bf7497f0e2bb', title: 'PATENT_TITLE_6392' },
        { id: '988a3991-6fef-4c9f-871d-01e24d08cadd', title: 'PATENT_TITLE_5850' },
        { id: '42947e9f-c2c7-4a74-a285-dc847cff4fc8', title: 'PATENT_TITLE_1304' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App