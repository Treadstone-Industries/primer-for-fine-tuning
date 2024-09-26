import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e08929ec-6693-47af-83ed-c87f6efb89cf', title: 'PATENT_TITLE_2601' },
            { id: 'f6d4f7a2-2d41-478b-a35e-f9189a76d10e', title: 'PATENT_TITLE_7249' },
            { id: 'a8c637ed-0297-4b5e-84b6-bc5cadf90279', title: 'PATENT_TITLE_6626' },
            { id: 'ffa447f6-2354-4c7a-8a25-94871dd61054', title: 'PATENT_TITLE_7336' },
            { id: 'aebf0264-bbed-4598-99b9-24b4c85205e1', title: 'PATENT_TITLE_1004' },
            { id: '8a1a2990-b081-48ee-af1b-2d0816f09a02', title: 'PATENT_TITLE_6616' },
            { id: 'ac27d8ad-0c70-4c5f-825d-cff55552523a', title: 'PATENT_TITLE_6476' },
            { id: '48a6d83a-5a3a-4579-8f69-349c6c49d70e', title: 'PATENT_TITLE_3502' },
        ]}
    />
)

export default App