import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7b9459d7-8b51-448d-b53c-e810f27fb40d', title: 'PATENT_TITLE_4672' },
            { id: 'ffbae997-77c2-46c9-b3fa-3cf6f34b0537', title: 'PATENT_TITLE_4951' },
            { id: 'cef510c7-8c6b-48ea-a64e-0de4b0f31de5', title: 'PATENT_TITLE_3447' },
            { id: '952b09cd-fd4e-4c3c-bda2-e333c786ddbd', title: 'PATENT_TITLE_3846' },
            { id: '973e9b25-c228-4cbf-9755-d4fcd573c413', title: 'PATENT_TITLE_4104' },
            { id: '1aac107e-4500-468c-a73f-eff34241dd3a', title: 'PATENT_TITLE_9641' },
            { id: 'd3b149b4-cf51-4395-866a-36f7ce70e72e', title: 'PATENT_TITLE_6095' },
            { id: '28596345-badc-42bc-a14e-e055bbfce35f', title: 'PATENT_TITLE_6298' },
            { id: 'da56ca19-82aa-450d-87af-a48b3b6e9a9f', title: 'PATENT_TITLE_8850' },
        ]}
    />
)

export default App