import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '315fe4f3-5fc3-4489-8325-6def4ac0cabf', title: 'PATENT_TITLE_5815' },
            { id: '1b6c9a3f-3122-420f-b99c-1ff648c95a50', title: 'PATENT_TITLE_6295' },
            { id: 'db1c9075-96a1-4c60-a16b-0c4386b0b78d', title: 'PATENT_TITLE_5163' },
            { id: '83b7d152-4bac-4846-a83b-7756d75931ab', title: 'PATENT_TITLE_9034' },
            { id: '3a892ea5-abc4-418e-96ae-6daa7a1ae5da', title: 'PATENT_TITLE_8979' },
            { id: '14c1c9d1-7484-46b3-ad05-a0e9d5147e0c', title: 'PATENT_TITLE_7130' },
            { id: '2d4ede71-0344-494e-938f-76cadcd27aea', title: 'PATENT_TITLE_8884' },
            { id: '26bf9557-c098-417c-a40e-6315fd32572e', title: 'PATENT_TITLE_5799' },
            { id: 'e230e601-4d3a-4f17-b6ac-7ff4c9f46bcf', title: 'PATENT_TITLE_2254' },
        ]}
    />
)

export default App