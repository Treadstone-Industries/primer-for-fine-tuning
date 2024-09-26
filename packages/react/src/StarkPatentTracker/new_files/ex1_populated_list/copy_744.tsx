import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f69b1995-01d4-4014-b7d6-78ae50885eb9', title: 'PATENT_TITLE_8451' },
            { id: '5de5f155-5a91-4775-9591-6d917bc785d7', title: 'PATENT_TITLE_8699' },
            { id: 'dded1107-543e-46b0-9d9d-e74d72acd52a', title: 'PATENT_TITLE_8852' },
            { id: 'afd894ad-6a39-4c50-ae9e-dc5e25294a19', title: 'PATENT_TITLE_9683' },
            { id: 'efc8713b-dc81-42f4-8b10-a996750a1911', title: 'PATENT_TITLE_4925' },
            { id: '915dd425-f705-4f0b-bf00-f28dca438924', title: 'PATENT_TITLE_9395' },
            { id: '0d3e901a-3e4b-4b28-b835-70037a956a1b', title: 'PATENT_TITLE_5868' },
            { id: 'c5a492e3-293f-4b8f-a23e-526c005dca70', title: 'PATENT_TITLE_5623' },
        ]}
    />
)

export default App