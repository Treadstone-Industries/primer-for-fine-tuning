import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c728101c-26eb-4076-b162-8ea50efd9260', title: 'PATENT_TITLE_3222' },
            { id: 'a0c6052f-7cfd-480e-b121-2223f77b14f8', title: 'PATENT_TITLE_5027' },
            { id: 'bfb99151-ee21-4345-8b27-50d193dadda3', title: 'PATENT_TITLE_7013' },
            { id: '2022fca1-ac45-466b-82dc-5de00ed23d3b', title: 'PATENT_TITLE_9328' },
            { id: '474798bd-0438-4e40-bd68-20d0857786bb', title: 'PATENT_TITLE_3174' },
            { id: '40bb74cf-650c-4ae4-b548-a17431f051de', title: 'PATENT_TITLE_2495' },
            { id: '8c964a4b-4acd-4487-a27e-e1b4d39b6a78', title: 'PATENT_TITLE_8354' },
        ]}
    />
)

export default App