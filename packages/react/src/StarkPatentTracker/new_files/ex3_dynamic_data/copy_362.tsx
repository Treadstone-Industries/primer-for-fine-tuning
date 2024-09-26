import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '41ea6a48-0def-46d4-9a35-4785fa4bf222', title: 'PATENT_TITLE_6838' },
        { id: 'bc8623b3-a87f-42af-bc47-51c5190dcbd0', title: 'PATENT_TITLE_3182' },
        { id: '95e41a72-6776-4001-a44d-58bec2f4b70d', title: 'PATENT_TITLE_3381' },
        { id: 'acec6dfa-8366-4bf3-a14e-c15d3a803212', title: 'PATENT_TITLE_2746' },
        { id: '09036ee8-6d5f-4abf-be4f-1201f8518e50', title: 'PATENT_TITLE_8027' },
        { id: '011ed09a-973a-4cf3-9127-c0d18a513784', title: 'PATENT_TITLE_9355' },
        { id: 'edd41087-00a4-41b5-9603-792f928baa79', title: 'PATENT_TITLE_8947' },
        { id: '128bb15c-6f0f-4367-a075-783e65b645e8', title: 'PATENT_TITLE_4233' },
        { id: 'c36e489f-1a8e-48ef-8e76-41666dfbabc8', title: 'PATENT_TITLE_4922' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App