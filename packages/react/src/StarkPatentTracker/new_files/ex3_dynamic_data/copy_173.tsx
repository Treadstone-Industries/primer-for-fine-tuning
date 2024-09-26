import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4e616fd5-873d-4286-a116-a7d926785277', title: 'PATENT_TITLE_7713' },
        { id: '8aff4465-a6a8-4b36-8632-280905f35ea2', title: 'PATENT_TITLE_6489' },
        { id: 'a647209c-038f-470d-a9ff-806c8dbebe53', title: 'PATENT_TITLE_7815' },
        { id: '740a23eb-75d1-4646-8446-b462059c5d73', title: 'PATENT_TITLE_8303' },
        { id: '4b8059df-3142-4101-9477-6ef4f8024de2', title: 'PATENT_TITLE_8818' },
        { id: '5376e99f-3fff-4675-b603-c6881a1f441e', title: 'PATENT_TITLE_6520' },
        { id: 'ab452e2a-4461-43d7-8fe9-124bb2224fe2', title: 'PATENT_TITLE_4452' },
        { id: '051e2688-bb5d-4d98-814f-8d47b2c1153a', title: 'PATENT_TITLE_6943' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App