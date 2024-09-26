import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a3256cf1-4ddf-4570-9313-8f22677dd730', title: 'PATENT_TITLE_1858' },
            { id: '26b2c696-4656-4360-bf00-6051e2a52ecd', title: 'PATENT_TITLE_4262' },
            { id: '396a9eba-e01a-4071-a10b-bb42f1f5660b', title: 'PATENT_TITLE_9144' },
            { id: '37140b51-4c06-4f66-a807-2bc30bc06931', title: 'PATENT_TITLE_8500' },
            { id: '8dd60978-0a0b-4cca-888f-eb54a043ce6a', title: 'PATENT_TITLE_8675' },
        ]}
    />
)

export default App