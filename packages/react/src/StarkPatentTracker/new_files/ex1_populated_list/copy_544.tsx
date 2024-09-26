import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a820ab4a-904f-430f-834b-88b4ba8f9858', title: 'PATENT_TITLE_4441' },
            { id: '50684c5c-8438-4bdf-b95f-340fb66f548e', title: 'PATENT_TITLE_2443' },
            { id: '5ecdc864-d67c-4254-910c-008b84f15cdd', title: 'PATENT_TITLE_5855' },
            { id: 'ca2bb81a-00e9-497c-82f5-ce808176da9c', title: 'PATENT_TITLE_8073' },
            { id: 'e696872a-7f41-40f2-8153-b784f7635de0', title: 'PATENT_TITLE_8549' },
            { id: 'b9111358-4527-4428-97c4-bee98518d47d', title: 'PATENT_TITLE_6978' },
            { id: 'f582995f-7cec-4bd5-baba-e31325ffef5b', title: 'PATENT_TITLE_4769' },
            { id: '9883fb8e-0bb7-4f2d-8f79-66aad184cc09', title: 'PATENT_TITLE_5611' },
        ]}
    />
)

export default App