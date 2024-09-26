import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8d4a74d3-547f-4e5d-8998-5e7acb269663', title: 'PATENT_TITLE_8159' },
            { id: '26f5bae3-b110-4a3f-820e-8be65aa4e0b4', title: 'PATENT_TITLE_1934' },
            { id: 'a1ee7ae0-d3f4-4956-b45e-463948424835', title: 'PATENT_TITLE_9162' },
            { id: 'f1353a3c-df50-4d58-8e81-99cb54a2c637', title: 'PATENT_TITLE_6553' },
            { id: '2371bcdd-4fc5-4cfd-a0a2-b6a6a093b766', title: 'PATENT_TITLE_9408' },
            { id: 'efbbb30c-576e-42bb-843b-1a568974f5e7', title: 'PATENT_TITLE_8327' },
            { id: 'a08d19a6-b48c-4578-bcf9-e47f3088c658', title: 'PATENT_TITLE_1571' },
            { id: 'b9e482b2-ab05-446e-b980-7b355c5062e6', title: 'PATENT_TITLE_5358' },
        ]}
    />
)

export default App