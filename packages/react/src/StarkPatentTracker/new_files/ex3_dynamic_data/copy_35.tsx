import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5d635eaf-0579-4779-9986-ff360cceade7', title: 'PATENT_TITLE_7238' },
        { id: '37bd7231-eb49-4723-a8b2-8ab3b5949a25', title: 'PATENT_TITLE_3363' },
        { id: '28fe4c7b-3a32-4bbb-bed2-ed5134889d7d', title: 'PATENT_TITLE_3169' },
        { id: '5464f90b-a61f-40d0-a764-e8a4cdf3faa0', title: 'PATENT_TITLE_3198' },
        { id: 'c112ddc1-25ff-4925-b37c-3ec18bdf50e8', title: 'PATENT_TITLE_1398' },
        { id: 'd2f77585-6d2c-4f97-9dad-8d51067fde25', title: 'PATENT_TITLE_3904' },
        { id: '87f6c7be-911d-4937-bc05-b779a54be905', title: 'PATENT_TITLE_8750' },
        { id: '0fd02f4b-e3fb-47ff-9c3e-fcea59755d4e', title: 'PATENT_TITLE_9228' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App