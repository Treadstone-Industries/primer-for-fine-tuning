import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd376f261-3f26-4a3b-b515-a698ae3f02f3', title: 'PATENT_TITLE_3388' },
            { id: '91666878-0af1-418b-8bb8-63f762c125f9', title: 'PATENT_TITLE_9113' },
            { id: '2bbfe65f-4ffb-453c-aa4b-35a303fcfa6e', title: 'PATENT_TITLE_2276' },
            { id: '346c1de5-e35e-49d8-8756-e33cced54b48', title: 'PATENT_TITLE_1072' },
            { id: '7737a5c9-de0a-41eb-a4d8-3233c7650eb4', title: 'PATENT_TITLE_8785' },
            { id: '2f331529-7899-4b5b-92d5-13e9999d066a', title: 'PATENT_TITLE_2336' },
            { id: 'f337599b-8cfc-4ad9-8c34-c0e4f6018ca5', title: 'PATENT_TITLE_5349' },
            { id: 'ec75b787-fbf7-469f-b6b8-2df5faaaca9a', title: 'PATENT_TITLE_1625' },
            { id: 'dec53fa4-7848-481a-b2c1-02b1665125bb', title: 'PATENT_TITLE_7532' },
        ]}
    />
)

export default App