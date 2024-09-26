import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b0c546fe-0d66-4e51-af53-cb9172905a0a', title: 'PATENT_TITLE_6918' },
            { id: 'ac3e9133-a3b4-422e-a829-bac9fd2af5a9', title: 'PATENT_TITLE_2252' },
            { id: '789fc848-e745-4fa9-841e-1116fb90ffb3', title: 'PATENT_TITLE_3643' },
            { id: 'ecd13325-8824-4b98-9023-28ae8eb6db1f', title: 'PATENT_TITLE_3075' },
            { id: 'f8ca6e79-3741-4b21-8250-1023830f5fe7', title: 'PATENT_TITLE_3205' },
            { id: '6eea8067-fb64-403c-bbe3-77de4609a5e9', title: 'PATENT_TITLE_8467' },
            { id: '128aec42-c200-4316-96c7-38b930b53e3f', title: 'PATENT_TITLE_7583' },
            { id: '76196936-8961-4bc4-ba3d-9d2c7fe36177', title: 'PATENT_TITLE_5095' },
            { id: '0d01ac2f-10b3-45d3-87fa-0e5f31cf0f47', title: 'PATENT_TITLE_6339' },
        ]}
    />
)

export default App