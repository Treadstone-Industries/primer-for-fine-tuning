import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6f7efb1d-0dcf-4f79-b153-af8cc7f15ec5', title: 'PATENT_TITLE_6773' },
            { id: 'b3d7e53b-6ff6-4f6d-9feb-b9434062c14a', title: 'PATENT_TITLE_5034' },
            { id: '05a7eef3-c39f-41f0-b9e3-08033cf0d894', title: 'PATENT_TITLE_7374' },
            { id: 'c9a0d532-5a1b-47a4-8259-1b7ec5f2a888', title: 'PATENT_TITLE_8197' },
            { id: 'a04dc456-1c18-4da3-ab38-4a336499f932', title: 'PATENT_TITLE_7903' },
            { id: '6f34c5fd-7811-49ab-b52e-2136ba407216', title: 'PATENT_TITLE_4265' },
            { id: '6f79e099-d010-4bad-85d2-9a227e6238a0', title: 'PATENT_TITLE_8123' },
            { id: 'fb0489dd-c86c-4311-8777-a4cee9a74484', title: 'PATENT_TITLE_9740' },
        ]}
    />
)

export default App