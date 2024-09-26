import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '68dced0f-b70f-4b55-a24e-8c73255369da', title: 'PATENT_TITLE_6630' },
        { id: 'd1ff9759-e5b4-4d60-bc28-3e79c420c6b0', title: 'PATENT_TITLE_1132' },
        { id: 'a1e53ddd-a0d0-4c75-8265-7e66ebd07a92', title: 'PATENT_TITLE_9410' },
        { id: '72ed6431-d65a-4661-82d7-bdff84fe1667', title: 'PATENT_TITLE_9374' },
        { id: 'ff220fdf-2dc2-48bd-a21e-a5ef93befb8b', title: 'PATENT_TITLE_5511' },
        { id: '77c8734c-328c-48ed-8296-dd5f0afd7d7f', title: 'PATENT_TITLE_8075' },
        { id: '8d114ce7-91df-41e6-a256-2250e0c95f12', title: 'PATENT_TITLE_9904' },
        { id: '1546e46e-e9b1-496e-9490-6e84bac7bf08', title: 'PATENT_TITLE_6559' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App