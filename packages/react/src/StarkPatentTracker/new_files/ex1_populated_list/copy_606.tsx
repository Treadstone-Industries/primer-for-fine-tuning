import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '71547b86-5adb-4fab-a0e0-c247c53b4c32', title: 'PATENT_TITLE_9009' },
            { id: 'f47efad4-4b51-4344-bac6-4336a6b44f6b', title: 'PATENT_TITLE_8579' },
            { id: 'f6016db7-2367-47fd-9e0b-df81f0f79262', title: 'PATENT_TITLE_6898' },
            { id: '7a132c20-8e51-4abe-91dd-3b4dfdbbf2c7', title: 'PATENT_TITLE_6220' },
            { id: 'bda1d56d-4ef2-4c04-a801-a34e3a3a67a6', title: 'PATENT_TITLE_3561' },
            { id: '16078fd9-0983-4515-80d3-f00b95ebef76', title: 'PATENT_TITLE_8324' },
            { id: '86e07bf9-0d28-4830-9929-170ccd24c321', title: 'PATENT_TITLE_8585' },
            { id: '41368e94-34ea-4158-ad6a-3d0fe11f6e8e', title: 'PATENT_TITLE_7146' },
            { id: '1ae78e5f-5937-403b-a74a-c10da030e8f5', title: 'PATENT_TITLE_1391' },
        ]}
    />
)

export default App