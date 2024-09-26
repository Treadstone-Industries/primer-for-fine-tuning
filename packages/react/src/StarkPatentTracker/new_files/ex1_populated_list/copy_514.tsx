import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b3106b50-9838-4dce-9c6d-ecf9ab453177', title: 'PATENT_TITLE_5303' },
            { id: '0cc7b735-7fa6-4b4c-9804-901bd011faa5', title: 'PATENT_TITLE_1533' },
            { id: '67ba0425-343e-407d-be90-d22b250b0db3', title: 'PATENT_TITLE_8374' },
            { id: 'c2a0122b-c13d-4fb5-a23a-d6b432d06490', title: 'PATENT_TITLE_9077' },
            { id: 'e7052659-047b-47e8-97d1-0fdcc0796a09', title: 'PATENT_TITLE_1031' },
            { id: 'c02eeabd-8a75-49c5-9d39-04654078015d', title: 'PATENT_TITLE_1233' },
            { id: '64788784-a90f-4fad-9329-d27cea0243ba', title: 'PATENT_TITLE_1766' },
            { id: '671794b7-02cd-42fc-bbb7-264b41c9133a', title: 'PATENT_TITLE_4111' },
            { id: 'a9ec4dfa-c367-4b93-9d5f-fa7a7e37dcde', title: 'PATENT_TITLE_5431' },
            { id: '596eeeb9-e59e-45fc-816a-916dc9dc23ba', title: 'PATENT_TITLE_9862' },
        ]}
    />
)

export default App