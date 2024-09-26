import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b12ce3aa-18db-4afe-add6-88518c269ca7', title: 'PATENT_TITLE_5544' },
            { id: '05b10871-9aa1-48e6-9711-c4e5e9d9f3ef', title: 'PATENT_TITLE_7556' },
            { id: '41199a6b-b684-4d1c-ae14-917da1e5ef3b', title: 'PATENT_TITLE_2179' },
            { id: 'f5a48fc9-0de0-4f27-a4e6-862b895c9401', title: 'PATENT_TITLE_7624' },
            { id: 'c0b4fdae-945b-4ce2-a781-8c52469c4544', title: 'PATENT_TITLE_4097' },
            { id: '2ce055a4-ab41-4a2a-bcfc-99147e6d8dab', title: 'PATENT_TITLE_7919' },
            { id: '0bc4e640-d8fe-46d1-a60f-5546ec61ad57', title: 'PATENT_TITLE_4595' },
            { id: 'e65b326c-a28b-4aca-a6fd-bab37e24d132', title: 'PATENT_TITLE_8940' },
            { id: '4a2a10cd-521f-4e3c-9fd6-7c72fa04aac6', title: 'PATENT_TITLE_3624' },
        ]}
    />
)

export default App