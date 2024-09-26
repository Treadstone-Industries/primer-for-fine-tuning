import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e5f0fadb-3248-4e21-8630-8bdc44429287', title: 'PATENT_TITLE_3039' },
            { id: '52814cb2-ae1e-462c-b474-8231af18d01d', title: 'PATENT_TITLE_1529' },
            { id: '24f791d4-dae4-4ef7-8192-fc9ef7bc6f80', title: 'PATENT_TITLE_2306' },
            { id: 'e0a9b2ee-6c04-45a8-9012-22d4d0c3bb57', title: 'PATENT_TITLE_5144' },
            { id: 'b5d2d3d4-b695-4bbc-8aba-33b19a8a33e5', title: 'PATENT_TITLE_3245' },
            { id: 'de73e599-ce50-41a3-b3fe-04e80baab0f5', title: 'PATENT_TITLE_5513' },
            { id: 'e0ce3b59-8d22-4c24-8dcd-2d24d08d14b1', title: 'PATENT_TITLE_9060' },
            { id: '54856080-13b9-4e95-a791-7ae9e5bc3518', title: 'PATENT_TITLE_3969' },
            { id: '0f18b3d6-694c-4e85-9567-a325aebd7d0b', title: 'PATENT_TITLE_7659' },
            { id: 'cb92c748-aebb-4176-b765-4989efdff79f', title: 'PATENT_TITLE_9098' },
        ]}
    />
)

export default App