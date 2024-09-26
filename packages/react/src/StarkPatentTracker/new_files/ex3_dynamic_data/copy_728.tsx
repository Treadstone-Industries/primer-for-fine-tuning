import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '15015f94-e041-4cc9-a00e-65ac6ee96714', title: 'PATENT_TITLE_1079' },
        { id: 'd5723ac6-308f-406f-8c78-d0ce38f39b33', title: 'PATENT_TITLE_2956' },
        { id: '9b8178fe-ead0-4b69-942c-97ab94833346', title: 'PATENT_TITLE_8939' },
        { id: '83475ce9-44b8-4128-98df-61d295193856', title: 'PATENT_TITLE_5610' },
        { id: 'f240cf17-23b1-4c2f-86fc-621582b70aff', title: 'PATENT_TITLE_7956' },
        { id: 'c4676021-4f77-40cc-9d90-e35af78a8b07', title: 'PATENT_TITLE_1597' },
        { id: '49fa4a07-9ab7-47bd-b855-45179c1e2325', title: 'PATENT_TITLE_9870' },
        { id: '24d4611c-2c15-48b7-a818-c714acaa90a5', title: 'PATENT_TITLE_9009' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App