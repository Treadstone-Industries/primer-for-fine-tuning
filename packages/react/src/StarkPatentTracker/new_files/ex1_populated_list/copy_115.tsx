import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '44970a03-18e9-4ce1-b2e6-88d5a2163f46', title: 'PATENT_TITLE_7098' },
            { id: 'c4987b6b-e950-4468-8154-e6672e80ae48', title: 'PATENT_TITLE_2611' },
            { id: 'a3970b98-18c8-4ec1-b163-e0e3d57dc14d', title: 'PATENT_TITLE_9960' },
            { id: '9f2125fd-0644-49fa-91a9-d0c2bf00ccfd', title: 'PATENT_TITLE_9072' },
            { id: 'b8467225-ad6c-45dd-9b2d-d4216cf56c1d', title: 'PATENT_TITLE_6093' },
            { id: '9ebe0f07-b0e2-4183-9d58-5a8777feba09', title: 'PATENT_TITLE_5957' },
            { id: '009a9f92-cddf-4bce-8a42-207cb520bc43', title: 'PATENT_TITLE_9004' },
            { id: 'f54ab585-78de-48b6-b91e-f1abe619a935', title: 'PATENT_TITLE_1154' },
        ]}
    />
)

export default App