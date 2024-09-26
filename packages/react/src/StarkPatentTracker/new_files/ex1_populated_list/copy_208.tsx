import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '13520d62-53fd-4b29-9a6c-cd48f0107a0f', title: 'PATENT_TITLE_2855' },
            { id: '9ca4c56a-b579-4f08-94f3-b61232bd6013', title: 'PATENT_TITLE_6732' },
            { id: 'bb59a4df-4472-4ead-aabc-84c7fe65f970', title: 'PATENT_TITLE_6829' },
            { id: '76194bf1-6210-463f-94d1-4a0f72ed1232', title: 'PATENT_TITLE_9747' },
            { id: '5000c1f2-9af1-4111-8554-415d007b7cf8', title: 'PATENT_TITLE_9024' },
            { id: 'f46bffd8-7830-4fd1-b24a-9f4afb7b233c', title: 'PATENT_TITLE_1043' },
            { id: '0f384d14-25a3-4aeb-af43-2224f3d56ccf', title: 'PATENT_TITLE_6658' },
            { id: '77bd7c03-65f4-4919-be7f-2d9d3c3ba939', title: 'PATENT_TITLE_1777' },
            { id: '2fa942fb-eb2a-49e7-8e11-e853bf731af1', title: 'PATENT_TITLE_3262' },
            { id: 'f2590dfa-a771-4194-b2e1-17f2708a7cc8', title: 'PATENT_TITLE_2747' },
        ]}
    />
)

export default App