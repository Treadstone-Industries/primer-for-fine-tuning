import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3a1d9812-8120-4bcc-95a3-034954b96043', title: 'PATENT_TITLE_7743' },
            { id: '7dfbef0b-0c76-405f-a257-f4a79f99a733', title: 'PATENT_TITLE_8940' },
            { id: '4a991f4a-b074-4869-8d22-66ce68ddce47', title: 'PATENT_TITLE_5028' },
            { id: '22625ef5-02f6-47bb-847d-e78098bd2b23', title: 'PATENT_TITLE_1340' },
            { id: '09013188-30f5-441a-9da5-a91242b204a3', title: 'PATENT_TITLE_3404' },
            { id: 'b2bc6397-83f3-402b-858a-3364c035f248', title: 'PATENT_TITLE_1437' },
            { id: 'd7cfc064-43f7-4845-8552-67fb5478ce21', title: 'PATENT_TITLE_6903' },
        ]}
    />
)

export default App