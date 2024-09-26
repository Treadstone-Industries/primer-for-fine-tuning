import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3f1d1d63-95aa-4d02-b18d-dd1c68fbccc8', title: 'PATENT_TITLE_9930' },
        { id: '1d749e76-7b51-4b79-a12b-26dde4429a7f', title: 'PATENT_TITLE_8501' },
        { id: '9b92eaf9-17c8-474d-8479-87760a8da9d6', title: 'PATENT_TITLE_3672' },
        { id: '555f69a3-7609-40d8-b14b-292dcea74492', title: 'PATENT_TITLE_8977' },
        { id: '0d25fb34-9bb3-4cd2-9a14-01f9e76dc500', title: 'PATENT_TITLE_9688' },
        { id: '2b86c1ae-bef9-4b8b-8c10-7275d5fdd690', title: 'PATENT_TITLE_8080' },
        { id: '3abbf419-34e6-4046-9118-5c453dd05f4b', title: 'PATENT_TITLE_6194' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App