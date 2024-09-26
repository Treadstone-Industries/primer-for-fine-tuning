import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a14bebbe-48b4-4201-b530-89b7039a58fd', title: 'PATENT_TITLE_6755' },
            { id: 'bb3de400-cf50-4a20-b8a4-958e3f9776f7', title: 'PATENT_TITLE_7389' },
            { id: 'a6b92edb-7958-4b3f-8a9a-dab868cd3749', title: 'PATENT_TITLE_7612' },
            { id: 'f41673d7-0d47-4af8-8222-fad32f91c178', title: 'PATENT_TITLE_4528' },
            { id: 'bc1ee808-4572-42e7-ad5c-fa79fae4857c', title: 'PATENT_TITLE_7494' },
            { id: 'beb8f148-bda6-4a84-aa93-4ccf846579ee', title: 'PATENT_TITLE_1677' },
            { id: '8d44959f-ff37-4b91-8631-c0041cc33a1a', title: 'PATENT_TITLE_3920' },
        ]}
    />
)

export default App