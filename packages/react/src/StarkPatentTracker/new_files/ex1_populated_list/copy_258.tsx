import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a5b7e480-8c7b-4196-9af2-3a56b25464d6', title: 'PATENT_TITLE_8260' },
            { id: 'ed7ce32c-a88b-433f-9fed-c6170a5e063a', title: 'PATENT_TITLE_6198' },
            { id: '5a69be4c-5d99-492e-b38c-06f458e571ed', title: 'PATENT_TITLE_3297' },
            { id: 'c8ab539c-d4a8-4a40-85f1-c5b97c4cd8f4', title: 'PATENT_TITLE_4872' },
            { id: '044b8e83-a17d-4667-92b0-1da43c6f9658', title: 'PATENT_TITLE_5529' },
            { id: '8d43e734-8881-4bc3-8f70-f63957452f74', title: 'PATENT_TITLE_9350' },
            { id: 'e104b9b8-8eda-470a-9605-b4b20506931b', title: 'PATENT_TITLE_6505' },
            { id: 'ef8fbebf-d425-4ced-ae18-a51701e330b6', title: 'PATENT_TITLE_3200' },
            { id: 'bae2d8ab-837e-40db-93e4-e5160c97e752', title: 'PATENT_TITLE_7235' },
        ]}
    />
)

export default App