import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '42add212-0b92-4021-aa7f-d43045550132', title: 'PATENT_TITLE_1667' },
            { id: '03a4ba7d-a54e-4d24-937e-79154d5c0af4', title: 'PATENT_TITLE_6218' },
            { id: 'c379ddc3-007f-49aa-a272-0d58bb4e24fe', title: 'PATENT_TITLE_7364' },
            { id: '924a5ebe-94fe-4cd1-8449-84e234301b46', title: 'PATENT_TITLE_9392' },
            { id: '3a88239c-840f-4250-b5c9-c1f342483396', title: 'PATENT_TITLE_5362' },
        ]}
    />
)

export default App