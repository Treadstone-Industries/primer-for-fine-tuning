import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f57f146f-1b1d-46c8-8fa1-c65bf4ac0c24', title: 'PATENT_TITLE_3862' },
            { id: 'd46d35be-7d4b-404e-93b7-d4898077e78f', title: 'PATENT_TITLE_9077' },
            { id: '5573a814-6806-4d8b-be4a-292801b50cbd', title: 'PATENT_TITLE_5518' },
            { id: '1d0b3b9e-f8ac-47bc-9aa6-5622178fe8be', title: 'PATENT_TITLE_4263' },
            { id: '4a07ef0b-9828-443f-901b-0afa01fb8b58', title: 'PATENT_TITLE_7481' },
            { id: '95cf309c-b833-4e65-854d-4d6f6798d2e9', title: 'PATENT_TITLE_9600' },
            { id: '04b3d1c6-5684-4c86-860e-2546d6c7309a', title: 'PATENT_TITLE_1433' },
        ]}
    />
)

export default App