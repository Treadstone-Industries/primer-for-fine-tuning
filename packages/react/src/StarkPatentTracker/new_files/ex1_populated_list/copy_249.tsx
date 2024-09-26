import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd2f8639e-2651-4f39-a78b-162616b8b665', title: 'PATENT_TITLE_5028' },
            { id: '6df1f57d-7e8e-45fe-8958-3db3d614b5af', title: 'PATENT_TITLE_9470' },
            { id: '93f61aac-c6c6-4b15-a6a9-f6ff95b72a8d', title: 'PATENT_TITLE_2603' },
            { id: '2d41ff01-785a-4724-97c6-afb5d009a156', title: 'PATENT_TITLE_9188' },
            { id: 'bb19cbc4-eb32-44c6-a139-51ff7126288e', title: 'PATENT_TITLE_1506' },
            { id: 'e4b7ffe7-0156-48dd-a1d8-62b3de195c72', title: 'PATENT_TITLE_5995' },
            { id: 'f7b262e9-209f-4361-970e-6ce4810cf509', title: 'PATENT_TITLE_8478' },
            { id: '513e27a5-8c81-4a54-8f00-412a2ae15b71', title: 'PATENT_TITLE_1279' },
            { id: 'e88d9a22-0178-4497-a926-7ae7c84882a1', title: 'PATENT_TITLE_9212' },
        ]}
    />
)

export default App