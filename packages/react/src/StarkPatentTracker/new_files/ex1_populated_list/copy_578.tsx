import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b77848ec-4af5-4cb4-af54-17a9f29bfea4', title: 'PATENT_TITLE_8381' },
            { id: '3fda2b27-9f64-48b5-b6ef-11282c78c9d7', title: 'PATENT_TITLE_9387' },
            { id: 'cc37400d-f806-41d3-b45a-a74aed64a297', title: 'PATENT_TITLE_8471' },
            { id: '55938bfa-9d4f-4817-85ea-8bd5ad163af5', title: 'PATENT_TITLE_7893' },
            { id: '1b5aa12f-4a04-4113-8487-0318d51140ca', title: 'PATENT_TITLE_1394' },
            { id: '2e92002c-70d7-4c78-80fe-7045a69a0987', title: 'PATENT_TITLE_1432' },
            { id: '9df40d33-47aa-4a6b-a261-bd2feb20fd9e', title: 'PATENT_TITLE_5133' },
            { id: '934ecf05-7281-4a12-b2c4-e4d0e1197661', title: 'PATENT_TITLE_2068' },
            { id: 'de151235-cbe5-4ee1-bfa1-eb61d2ce04ee', title: 'PATENT_TITLE_7035' },
        ]}
    />
)

export default App