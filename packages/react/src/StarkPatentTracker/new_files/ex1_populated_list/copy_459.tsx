import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e6043fce-cc31-4f09-8778-e45e81c321fa', title: 'PATENT_TITLE_9816' },
            { id: '803258a6-f7e7-42db-9fdf-55466925e68f', title: 'PATENT_TITLE_8437' },
            { id: 'c6b2df4a-da69-4a1a-b9e2-3a77bba33372', title: 'PATENT_TITLE_4049' },
            { id: '83635355-a004-43d7-bf87-db31f59fceb7', title: 'PATENT_TITLE_5367' },
            { id: '1d221d6b-ddcc-428b-a4d6-947ddb16fe06', title: 'PATENT_TITLE_2068' },
        ]}
    />
)

export default App