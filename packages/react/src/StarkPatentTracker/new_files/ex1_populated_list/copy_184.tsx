import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0357b9c6-733d-482d-b46f-4bcc4f144db8', title: 'PATENT_TITLE_2822' },
            { id: '88b98e70-1a00-41d7-82cc-359ed119e4a6', title: 'PATENT_TITLE_2628' },
            { id: 'ce1e440b-db02-40d8-88f7-b3bd873fbfe9', title: 'PATENT_TITLE_4834' },
            { id: '7c3ffb5a-f054-4ed8-841e-c0f262446646', title: 'PATENT_TITLE_4267' },
            { id: 'feb256dd-bd43-41da-b639-2b08745521fa', title: 'PATENT_TITLE_8147' },
            { id: 'fbbfa290-849f-4b25-aed8-36a9072cae5d', title: 'PATENT_TITLE_8327' },
            { id: '95a6174f-09ea-4ad3-a8e9-d423e26405b0', title: 'PATENT_TITLE_1938' },
        ]}
    />
)

export default App