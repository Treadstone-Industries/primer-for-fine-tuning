import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6a818636-efbc-4dbd-863f-89a89f3166dc', title: 'PATENT_TITLE_9876' },
            { id: '08e90b1d-a85e-4d27-801e-724bd118902c', title: 'PATENT_TITLE_1523' },
            { id: '85b3c10d-3e8f-4ea8-97b2-91375cb4be66', title: 'PATENT_TITLE_2334' },
            { id: 'fdc97b83-eb66-4ea0-8e27-28cf23df7f2d', title: 'PATENT_TITLE_8585' },
            { id: 'f0879cb8-7470-4d64-95ac-6e5dca7206e6', title: 'PATENT_TITLE_8462' },
            { id: '66864400-8088-4af9-a932-e2b70696fd9b', title: 'PATENT_TITLE_3792' },
            { id: 'f6739b84-022b-4f1e-8a68-a46b2427d3f0', title: 'PATENT_TITLE_6465' },
            { id: 'fc977b1c-7254-469e-868e-0fdf80cbc266', title: 'PATENT_TITLE_6547' },
            { id: '578dfcf6-c838-4063-9bf6-84d3198cd8a4', title: 'PATENT_TITLE_8387' },
            { id: 'e84c5eb3-69f5-4faf-8b0e-1780ce47816c', title: 'PATENT_TITLE_2847' },
        ]}
    />
)

export default App