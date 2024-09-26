import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd0926873-b914-4516-b298-371f06b92415', title: 'PATENT_TITLE_5585' },
            { id: '15c50761-f11a-44ac-80b0-1cd818de77d1', title: 'PATENT_TITLE_1783' },
            { id: '1cca14ee-73b8-4033-ac51-72c928728db3', title: 'PATENT_TITLE_7329' },
            { id: 'c19570e5-bf21-434c-b49b-49162eb76d70', title: 'PATENT_TITLE_6578' },
            { id: 'e309ca92-353b-4d71-8038-cbf12804f61b', title: 'PATENT_TITLE_2110' },
            { id: '1f996cfa-7b71-48bd-b68a-7b4458f4d56e', title: 'PATENT_TITLE_1648' },
            { id: '0aac36a7-b908-4b03-98f4-8c2d53e66660', title: 'PATENT_TITLE_6813' },
        ]}
    />
)

export default App