import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8db7f761-1a10-4069-a224-8fd15df87068', title: 'PATENT_TITLE_6984' },
            { id: '4466619d-f5b8-40f6-8d27-4c61b7e71e49', title: 'PATENT_TITLE_1836' },
            { id: 'd4f02eaf-bf5c-4de3-8f37-6dee45d798ac', title: 'PATENT_TITLE_6805' },
            { id: 'c0c30be0-173d-4a51-86e3-060e3dd35a15', title: 'PATENT_TITLE_3744' },
            { id: '259bef8f-99b0-4fad-8f6e-859eb403554c', title: 'PATENT_TITLE_4677' },
            { id: 'c18b553b-fd43-409a-a62d-bdffa238044b', title: 'PATENT_TITLE_4459' },
            { id: 'a2fc3d1f-692a-4adc-88af-50ca0070dea1', title: 'PATENT_TITLE_3180' },
            { id: '87001271-6614-41dd-ba43-214a265b1838', title: 'PATENT_TITLE_6656' },
            { id: 'c5639b82-359e-4a87-909f-45b4fd2b404c', title: 'PATENT_TITLE_5597' },
            { id: '0a2f8251-01f3-460c-b3f5-d838354eb471', title: 'PATENT_TITLE_3456' },
        ]}
    />
)

export default App