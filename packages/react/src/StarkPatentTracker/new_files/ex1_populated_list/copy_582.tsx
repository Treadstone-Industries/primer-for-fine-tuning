import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b5d1d66f-a51a-47f4-b636-56de12bd48a5', title: 'PATENT_TITLE_8851' },
            { id: 'd7769f27-c652-429f-861c-7c14fab20b1c', title: 'PATENT_TITLE_4560' },
            { id: 'a0dc0dd9-b25c-40f4-add4-3be16be16c19', title: 'PATENT_TITLE_8841' },
            { id: 'f54a1c0b-edf8-4bcd-8ff7-3afeed97b206', title: 'PATENT_TITLE_5664' },
            { id: 'a1d8c3e2-2466-4498-8414-5774fa7ab37d', title: 'PATENT_TITLE_6513' },
            { id: '2c630b63-6461-4a6b-91f2-3e3aa5c8ae0c', title: 'PATENT_TITLE_7992' },
            { id: 'c3700421-543a-48f7-8a01-6aa130abef34', title: 'PATENT_TITLE_6416' },
            { id: '4ea96a42-9eba-441b-b7d6-4de592f8087e', title: 'PATENT_TITLE_9951' },
            { id: 'a6b144d9-5768-4ed1-8795-e6dbf895e371', title: 'PATENT_TITLE_6412' },
        ]}
    />
)

export default App