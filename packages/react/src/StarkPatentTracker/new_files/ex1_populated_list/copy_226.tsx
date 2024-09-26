import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c4318fc8-38fa-475c-a609-dd9e1764901a', title: 'PATENT_TITLE_1841' },
            { id: 'c48406f8-de0d-449c-bc1d-d181ad55f1d6', title: 'PATENT_TITLE_3273' },
            { id: '81285559-1da9-498d-805e-dd9aaf0aa74f', title: 'PATENT_TITLE_6173' },
            { id: '2b73579b-6c1c-4142-8506-600f6d436070', title: 'PATENT_TITLE_6569' },
            { id: 'c54ee02e-9203-445d-94e4-f8e7c5cec625', title: 'PATENT_TITLE_2218' },
            { id: '69987f63-82bd-4f23-8045-3a093514f3cb', title: 'PATENT_TITLE_4344' },
            { id: '2130eff6-f9ed-4ba9-a778-2355999e202e', title: 'PATENT_TITLE_7652' },
            { id: '5d5bf65c-cf64-4671-b741-2cb67deed7a7', title: 'PATENT_TITLE_9433' },
            { id: '80b22a3e-bfcc-438c-a779-90381e2f4302', title: 'PATENT_TITLE_9092' },
        ]}
    />
)

export default App