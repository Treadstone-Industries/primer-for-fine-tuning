import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e5de34cb-cbb0-4059-a29d-84ce33997d88', title: 'PATENT_TITLE_9004' },
            { id: '28b8f117-44ac-4b3f-b21d-e66e619e7e67', title: 'PATENT_TITLE_6647' },
            { id: '0b8c0e40-131f-4876-a5b2-ba7827fde258', title: 'PATENT_TITLE_7209' },
            { id: 'ff9f7ba8-3271-4921-a3c7-8dd6e53328d7', title: 'PATENT_TITLE_8878' },
            { id: 'b1963a23-cf71-4070-a16a-dd6c1f04ab1e', title: 'PATENT_TITLE_4940' },
            { id: '8fa28d1d-b366-4999-8c57-2a29022d36f7', title: 'PATENT_TITLE_5100' },
            { id: '89d9ca97-4f61-48fc-b03a-be5cd8ba7c83', title: 'PATENT_TITLE_4450' },
            { id: '87718836-5b66-4ae3-89c7-66346a56b6da', title: 'PATENT_TITLE_1984' },
            { id: '5bba8891-f468-4a70-b440-cffb070ca103', title: 'PATENT_TITLE_9359' },
        ]}
    />
)

export default App