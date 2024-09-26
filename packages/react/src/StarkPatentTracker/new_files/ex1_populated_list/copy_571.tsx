import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bbf165d8-5a05-4fc9-b3b1-949dc5e35875', title: 'PATENT_TITLE_2616' },
            { id: '948711b5-c7d5-4310-869e-0decc9f6757e', title: 'PATENT_TITLE_9833' },
            { id: 'f69d343d-06b4-4126-bf0b-ab2f832159fb', title: 'PATENT_TITLE_1582' },
            { id: 'a79eeb4f-65c4-4560-9169-7f6bd1f1b15f', title: 'PATENT_TITLE_8547' },
            { id: 'e610971b-8f6b-469a-ba07-bd8dbf137b20', title: 'PATENT_TITLE_6364' },
            { id: '07afa7df-5878-41e7-a32a-d6721d2e5298', title: 'PATENT_TITLE_4089' },
            { id: '24fc8e65-2443-45e9-b973-afec17d3f0ad', title: 'PATENT_TITLE_8089' },
            { id: '7e482bea-76ad-4f64-bb03-efe8f5bfc995', title: 'PATENT_TITLE_2347' },
        ]}
    />
)

export default App