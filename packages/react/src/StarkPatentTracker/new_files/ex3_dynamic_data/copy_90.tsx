import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '31b7f862-fd3c-4e43-846f-6567ad548743', title: 'PATENT_TITLE_4801' },
        { id: '90db52eb-745d-4fd5-95a4-c7f4b96cc289', title: 'PATENT_TITLE_6717' },
        { id: '0d35121c-0ab9-4788-9ee2-89f7e46b76e8', title: 'PATENT_TITLE_8439' },
        { id: '6eceafb6-54d8-4cff-a1fc-8f1bfb6d7436', title: 'PATENT_TITLE_4316' },
        { id: '78b9e5fd-fd4b-4cf0-83bf-f68c63d2e70c', title: 'PATENT_TITLE_3645' },
        { id: '7306cd66-8cba-4a87-81c1-206ab7d8c850', title: 'PATENT_TITLE_3503' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App