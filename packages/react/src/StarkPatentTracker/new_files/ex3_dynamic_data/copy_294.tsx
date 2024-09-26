import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '46bbb9df-3b06-48ae-94dd-193cf3ba341f', title: 'PATENT_TITLE_9969' },
        { id: 'a9cf7a66-a364-4979-8465-9bf6fe14fd84', title: 'PATENT_TITLE_9092' },
        { id: '758397f6-954c-49ea-9246-6bd82ea2c16d', title: 'PATENT_TITLE_3762' },
        { id: '3965a649-6f1a-4441-8c5f-31805fdf2ced', title: 'PATENT_TITLE_8627' },
        { id: '206e5afc-d256-4ce1-b0b3-9bd5b83a83cc', title: 'PATENT_TITLE_6694' },
        { id: '4d647de3-f90e-40e2-a4e1-afd368223f03', title: 'PATENT_TITLE_3560' },
        { id: 'e39551e8-edc6-44f6-80fc-57832f569d18', title: 'PATENT_TITLE_9374' },
        { id: 'b0388488-b759-4420-b211-4b6f84a87bfe', title: 'PATENT_TITLE_6638' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App