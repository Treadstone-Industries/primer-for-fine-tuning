import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '51b0d8d3-9996-4740-ba36-5b50026c9ef2', title: 'PATENT_TITLE_9323' },
            { id: '650af48a-f81f-4cd9-9449-800471d18a5d', title: 'PATENT_TITLE_7405' },
            { id: 'a35537d9-20de-4529-9630-b61f473fbe78', title: 'PATENT_TITLE_4502' },
            { id: '3817e823-cc7b-49b8-b94e-ccdac0ea12a5', title: 'PATENT_TITLE_1077' },
            { id: 'c192a13d-5e70-44b7-bf8c-159e9a768f19', title: 'PATENT_TITLE_3084' },
            { id: '977456f8-8b9e-426c-9c2f-efc76111cc83', title: 'PATENT_TITLE_1898' },
        ]}
    />
)

export default App