import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e6423433-f151-4705-9f74-5e4f915a9cd6', title: 'PATENT_TITLE_8825' },
            { id: '7aa6ff5b-8a21-4197-9d16-22b011a51d07', title: 'PATENT_TITLE_3794' },
            { id: 'cfba5593-430a-41ff-a2fc-59e94ea18ed7', title: 'PATENT_TITLE_5219' },
            { id: 'dad3b1a8-71f8-4bfb-bbdd-4540aebe0885', title: 'PATENT_TITLE_1379' },
            { id: 'a6739c9e-52af-4391-bafd-780bbbbc9cb2', title: 'PATENT_TITLE_7421' },
            { id: '2af5b3fb-f703-428b-b8ba-1c0b593076af', title: 'PATENT_TITLE_7950' },
        ]}
    />
)

export default App