import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e02e3b89-6b38-4dab-8ba0-ddb84712d2fe', title: 'PATENT_TITLE_9381' },
            { id: '1c7125d1-7ede-446f-8d43-4ea06668e1e4', title: 'PATENT_TITLE_1843' },
            { id: 'c066c647-6faf-410e-a436-5d9e0fbf9495', title: 'PATENT_TITLE_6038' },
            { id: '594503fe-d8ff-4100-ac37-685ab2000c7c', title: 'PATENT_TITLE_5155' },
            { id: 'ab760282-00ea-4a63-90e9-9c2d43554040', title: 'PATENT_TITLE_9660' },
            { id: '137727fc-0e55-4f09-b346-15a8a4d6bf44', title: 'PATENT_TITLE_9665' },
            { id: '74fa0244-d321-4bb4-8621-f62bd2504d94', title: 'PATENT_TITLE_6019' },
            { id: '1e8e72fd-8ba8-4599-879a-ef5d8f72afd3', title: 'PATENT_TITLE_9860' },
            { id: 'cf097510-8330-4d23-a79b-dd1cecd21443', title: 'PATENT_TITLE_8620' },
        ]}
    />
)

export default App