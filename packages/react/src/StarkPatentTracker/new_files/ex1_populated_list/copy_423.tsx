import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '55c3f745-c86b-4031-8546-7d6bfcc9968f', title: 'PATENT_TITLE_6953' },
            { id: '5de756c0-c082-43cc-9a00-c86726d541c7', title: 'PATENT_TITLE_5956' },
            { id: '8bf7f40f-2ccc-417b-8a1b-a9eabf839cce', title: 'PATENT_TITLE_3153' },
            { id: '3d03eb10-dc5b-40a5-b42d-7ab66ce5ab82', title: 'PATENT_TITLE_2394' },
            { id: '3d5b02f4-e6ef-4466-b1dd-3c05667684c7', title: 'PATENT_TITLE_8481' },
            { id: '6f0c2122-3b60-4aac-ac78-e5809479cbe6', title: 'PATENT_TITLE_5432' },
        ]}
    />
)

export default App