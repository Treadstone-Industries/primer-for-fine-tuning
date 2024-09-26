import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bc1e6f77-0ed7-42ee-8c36-63a0afbe3d68', title: 'PATENT_TITLE_4093' },
            { id: 'c175800a-825c-4ecd-81eb-159ecebf8158', title: 'PATENT_TITLE_1474' },
            { id: 'e5cd471b-c80e-42fe-8adb-cc7830eca5b4', title: 'PATENT_TITLE_8906' },
            { id: 'cf791979-b528-4bc5-9a64-d76ac3a267a2', title: 'PATENT_TITLE_8677' },
            { id: '170919a3-ce7b-4bc6-9d72-15f8a35dcdef', title: 'PATENT_TITLE_1753' },
            { id: '8c2d5d07-cf19-4e48-8b67-4cd93c22f27a', title: 'PATENT_TITLE_7564' },
            { id: '9b590f83-5659-47a8-8f95-b0fd84d8b85f', title: 'PATENT_TITLE_6099' },
        ]}
    />
)

export default App