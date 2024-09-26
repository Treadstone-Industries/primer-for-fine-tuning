import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0f51f6a4-efe3-444e-84d9-8d46d95678ad', title: 'PATENT_TITLE_8180' },
            { id: 'b1b00d24-cc47-4420-a41d-97748e01e312', title: 'PATENT_TITLE_1069' },
            { id: 'f6213fd4-e0d3-4baf-bb8d-c1ee8dab10f7', title: 'PATENT_TITLE_7102' },
            { id: '23833017-9d2e-492e-8f29-b139df8bdc72', title: 'PATENT_TITLE_2927' },
            { id: '3a714aa2-9382-4f62-ad9d-eec2d5ffd34d', title: 'PATENT_TITLE_5958' },
            { id: 'ec135831-0335-4b8c-af4f-c49e16a06985', title: 'PATENT_TITLE_6500' },
            { id: 'a9122fd8-8dea-4c21-b0fe-979ef7f6ac93', title: 'PATENT_TITLE_7987' },
            { id: '87715d19-2457-4409-932b-7f6c82f74010', title: 'PATENT_TITLE_9475' },
            { id: '392053fc-5f04-4b4b-ae4f-1ee9d51ba2fe', title: 'PATENT_TITLE_3634' },
        ]}
    />
)

export default App