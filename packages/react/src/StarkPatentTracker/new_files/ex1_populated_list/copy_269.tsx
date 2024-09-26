import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bd2cf737-7164-4ff6-aa78-c68406b98977', title: 'PATENT_TITLE_4281' },
            { id: '4114970c-6a8c-4d00-8d6f-f51bd4ff727b', title: 'PATENT_TITLE_4487' },
            { id: 'b8b364fd-8319-4612-9f32-5891aa1971cc', title: 'PATENT_TITLE_6823' },
            { id: '4795487e-4286-4b4c-9148-9391ddbb878d', title: 'PATENT_TITLE_5915' },
            { id: '142e5315-4f1b-429b-be74-cc300b5a701f', title: 'PATENT_TITLE_6353' },
            { id: 'e7368487-5fed-473f-a73b-dced54bfc25e', title: 'PATENT_TITLE_9477' },
            { id: '2c4409aa-c369-48bf-9808-533b37db9a8f', title: 'PATENT_TITLE_8111' },
        ]}
    />
)

export default App