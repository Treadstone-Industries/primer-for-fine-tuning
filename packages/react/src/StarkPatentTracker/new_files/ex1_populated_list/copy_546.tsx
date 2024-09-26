import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e87acf3f-ba16-4be3-b2de-2128393ba529', title: 'PATENT_TITLE_4458' },
            { id: 'fc728b30-8225-417e-9d3b-3661a393b89e', title: 'PATENT_TITLE_2541' },
            { id: '83585282-5769-4a0f-9fbb-1f41c0b3f8e3', title: 'PATENT_TITLE_7126' },
        ]}
    />
)

export default App