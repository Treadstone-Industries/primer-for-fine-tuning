import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ecd9ff30-488f-4d06-a2a8-768b5b4fd003', title: 'PATENT_TITLE_9417' },
            { id: '1630bc04-0456-4932-90e7-943315991262', title: 'PATENT_TITLE_1108' },
            { id: 'ab457561-da84-4980-b90e-8f0147c992e3', title: 'PATENT_TITLE_3088' },
            { id: 'ca973249-4528-4cb6-9ca5-363bd50ef2d4', title: 'PATENT_TITLE_8269' },
            { id: 'f35ae869-eee1-49a0-83ad-8e056b402b13', title: 'PATENT_TITLE_7431' },
        ]}
    />
)

export default App