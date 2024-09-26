import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c733dd0a-9c9b-4002-8e8a-592c5404b3fc', title: 'PATENT_TITLE_8851' },
            { id: '1f6862c8-c9bc-4a15-af44-76c897c0d3f9', title: 'PATENT_TITLE_2682' },
            { id: 'f12f27aa-3288-4575-9017-5848544e037e', title: 'PATENT_TITLE_2823' },
            { id: '85345781-87eb-48fc-a549-d1f29e511d9e', title: 'PATENT_TITLE_1759' },
            { id: '0a357063-9fd6-405f-92ff-0fe9559a6f65', title: 'PATENT_TITLE_9351' },
            { id: 'db3f1646-7303-4546-8c04-84908098b5b1', title: 'PATENT_TITLE_6639' },
            { id: 'c3cb68f0-a39d-466d-b3ab-a1a6a20a1023', title: 'PATENT_TITLE_6167' },
            { id: '4b3a156e-b9f7-49aa-b287-ce2b86bd30cc', title: 'PATENT_TITLE_7886' },
            { id: '97f42690-d41d-41c6-ba6a-fcbf1d68ac9e', title: 'PATENT_TITLE_6227' },
        ]}
    />
)

export default App