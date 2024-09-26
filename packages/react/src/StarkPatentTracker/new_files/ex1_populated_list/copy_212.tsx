import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6c735445-e7a2-4729-97ab-ab4a89ea8aa2', title: 'PATENT_TITLE_7483' },
            { id: '0ec22e19-eec9-4dd7-80e4-a8b39e65a8d2', title: 'PATENT_TITLE_1942' },
            { id: '56ea6c36-aa97-48eb-873d-74f211923aa7', title: 'PATENT_TITLE_3470' },
            { id: 'e89e9ff9-feb9-4177-ab42-54a9a6ea76d1', title: 'PATENT_TITLE_6546' },
            { id: 'fd1c8a11-9dec-4890-bc6b-50fd8623843d', title: 'PATENT_TITLE_6619' },
            { id: '0638fef5-56c3-4aac-82b6-36692df32928', title: 'PATENT_TITLE_4869' },
            { id: '6bd56612-61b2-4c1d-8f8c-ab04f64bf7ba', title: 'PATENT_TITLE_9213' },
            { id: '67d2be00-c0e4-4c7b-a6ca-d60245374aae', title: 'PATENT_TITLE_8049' },
            { id: '91ca278b-ade5-407f-bfac-287f2bb1c2b1', title: 'PATENT_TITLE_8927' },
        ]}
    />
)

export default App