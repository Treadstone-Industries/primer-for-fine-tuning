import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6acde6cf-7bc0-472a-bec0-6f231b158e46', title: 'PATENT_TITLE_6729' },
            { id: '41053ac0-2dc9-4709-9af0-51c28beb6439', title: 'PATENT_TITLE_8708' },
            { id: 'a94ea84d-2ba9-44d9-8dd1-dbbb6a5dc419', title: 'PATENT_TITLE_9750' },
            { id: '38a18dd0-1f73-47ac-8ae8-dd303e166d3f', title: 'PATENT_TITLE_8807' },
            { id: '0c592aa8-4ba5-42fc-94ed-0b0f1b100d72', title: 'PATENT_TITLE_1507' },
            { id: '206df6ee-3a72-46ff-9578-96017f71025a', title: 'PATENT_TITLE_9971' },
            { id: 'e5b1f71e-c97d-4245-b0d1-2dbad6706edf', title: 'PATENT_TITLE_6998' },
            { id: '3066241a-1744-4c98-ba55-549e4c977999', title: 'PATENT_TITLE_6395' },
            { id: 'e2fab3ec-b2b9-443b-bb93-9810ac5f36ea', title: 'PATENT_TITLE_3114' },
        ]}
    />
)

export default App