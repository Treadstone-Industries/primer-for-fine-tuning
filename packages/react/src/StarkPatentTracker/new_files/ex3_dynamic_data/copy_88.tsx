import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '44e3b643-71a5-42ef-97d2-cd58da22c33a', title: 'PATENT_TITLE_2207' },
        { id: '54fd84c8-efb0-448f-9fde-ce3c04c4e371', title: 'PATENT_TITLE_6519' },
        { id: '588cad16-ca00-4ab1-954f-fc98ae8b0dfe', title: 'PATENT_TITLE_2095' },
        { id: 'e45b1fbe-a21f-4f2e-98f1-10cf481a56e5', title: 'PATENT_TITLE_8913' },
        { id: '919e9ee1-8b2c-4261-9238-a3545a1038ca', title: 'PATENT_TITLE_4566' },
        { id: '72d6a713-23c9-4b31-bf2b-a0dafe6124b8', title: 'PATENT_TITLE_6490' },
        { id: 'b20cba9c-cf41-4f2b-810c-438f787d33a6', title: 'PATENT_TITLE_5249' },
        { id: '81a46863-430c-4fd9-9398-78bbfef1e885', title: 'PATENT_TITLE_3362' },
        { id: '06400615-0cd7-440d-8383-65c50c582663', title: 'PATENT_TITLE_4070' },
        { id: 'f2b9831d-aff2-4144-afa7-5fb12f96e5c7', title: 'PATENT_TITLE_1592' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App