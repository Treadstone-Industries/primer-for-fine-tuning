import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '972cecf6-5659-4340-9f4d-0580b5e89a3b', title: 'PATENT_TITLE_1423' },
            { id: '4cc22001-81d6-4ccd-b572-532725e3ba43', title: 'PATENT_TITLE_7202' },
            { id: '5ac2ad67-57b9-4f8d-ba4a-5c673e49ddff', title: 'PATENT_TITLE_1107' },
            { id: '4f7b2ec2-8280-4edf-88e2-508b268402a4', title: 'PATENT_TITLE_3395' },
            { id: 'de081c30-7fab-4056-bd3d-622d32c82ee4', title: 'PATENT_TITLE_3329' },
            { id: '54d88201-73b4-4210-a0cf-4df46d8a24d0', title: 'PATENT_TITLE_1180' },
            { id: 'a4706de8-0a66-41e8-b0f7-0e451ec92d36', title: 'PATENT_TITLE_3373' },
            { id: 'a0d3cabd-a65c-4577-bf60-0b470e308f20', title: 'PATENT_TITLE_2130' },
        ]}
    />
)

export default App