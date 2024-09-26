import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0028951a-35ba-4334-8ab6-3b37de03c4ef', title: 'PATENT_TITLE_2993' },
            { id: '9cf87a4e-b5d8-48e1-9e5c-87a91f576b16', title: 'PATENT_TITLE_7454' },
            { id: 'b0ee98f2-cc72-4c02-aad6-0043b7954579', title: 'PATENT_TITLE_2101' },
            { id: '2e7cbb23-a152-41f7-8a96-bb1909e7ea49', title: 'PATENT_TITLE_9195' },
            { id: '4fcafc2c-54ce-4fca-b3d4-76061f63999b', title: 'PATENT_TITLE_8958' },
            { id: '1ce0b0e1-b35d-40ae-8845-bde20d420491', title: 'PATENT_TITLE_9330' },
            { id: 'cc66a0c7-062d-4127-b5b4-f65f9ed53913', title: 'PATENT_TITLE_3949' },
        ]}
    />
)

export default App