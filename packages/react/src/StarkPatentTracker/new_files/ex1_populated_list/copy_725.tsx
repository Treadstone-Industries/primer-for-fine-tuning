import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a17daa1c-d4a5-4664-a679-cdd69adf6d23', title: 'PATENT_TITLE_2425' },
            { id: 'f6534acd-bd09-4fb3-a7c0-34a6c123e5aa', title: 'PATENT_TITLE_2470' },
            { id: '99cf8530-e702-47a5-baef-69d4cc1b6fab', title: 'PATENT_TITLE_1344' },
            { id: '8c84c1b9-b016-4548-b717-62778eb19e29', title: 'PATENT_TITLE_1025' },
            { id: 'f5de3644-a883-43d5-9dd0-093841721567', title: 'PATENT_TITLE_3124' },
            { id: 'b5b014b1-7449-4440-b297-c586294518db', title: 'PATENT_TITLE_2152' },
            { id: '90666979-e305-4990-a11c-f1aeeb459c85', title: 'PATENT_TITLE_5681' },
        ]}
    />
)

export default App