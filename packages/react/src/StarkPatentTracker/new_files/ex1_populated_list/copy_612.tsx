import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f1f8ab77-7a9f-482b-8c85-4eb78e4153a9', title: 'PATENT_TITLE_7005' },
            { id: '65d6de7f-f2b6-40a2-aa1a-c162f83301ee', title: 'PATENT_TITLE_9270' },
            { id: 'a6e172fb-831c-48b4-9171-0f949f5cb7de', title: 'PATENT_TITLE_9728' },
            { id: '9cfcbc11-93ae-48b4-8287-a5ef005507bd', title: 'PATENT_TITLE_1153' },
            { id: '0d272fbb-ad06-4b28-bca2-144ece23af43', title: 'PATENT_TITLE_5455' },
            { id: 'c845ab35-bfd1-4ae7-b3ec-87b527894b3c', title: 'PATENT_TITLE_1217' },
            { id: '18e4866b-3cb2-4286-8ce7-deba204bf379', title: 'PATENT_TITLE_1438' },
            { id: 'b19070bd-57fa-48ca-b282-ae60597555c8', title: 'PATENT_TITLE_1493' },
        ]}
    />
)

export default App