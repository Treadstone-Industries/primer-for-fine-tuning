import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b00e1d12-3bbf-40ac-83bc-d60677231677', title: 'PATENT_TITLE_4899' },
            { id: '10c1d7a8-721b-4599-9992-0db65e6ecc64', title: 'PATENT_TITLE_9957' },
            { id: '649e4cb3-a04d-4533-9595-01890d14cab0', title: 'PATENT_TITLE_4387' },
            { id: '3103af4d-fb50-4b8d-85b3-3fa575b58ba6', title: 'PATENT_TITLE_2950' },
            { id: '1dc4ecec-d883-4b68-923a-ecbce1c84432', title: 'PATENT_TITLE_6749' },
            { id: 'fa34985f-73d6-41bc-a5d2-3f6a1585df3a', title: 'PATENT_TITLE_1026' },
            { id: '2bda5b67-d64f-4fda-bb8c-47694fa3a659', title: 'PATENT_TITLE_4972' },
        ]}
    />
)

export default App