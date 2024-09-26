import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1912fc06-9e87-4a90-996a-008694005799', title: 'PATENT_TITLE_1956' },
            { id: 'c15729a5-69a2-4db5-b6cc-3c5edbc20ca2', title: 'PATENT_TITLE_8745' },
            { id: '712e681c-262c-4095-8751-ce6fe88ffc77', title: 'PATENT_TITLE_6866' },
            { id: 'b00e7ff8-b04f-432c-a97f-1bed6fd4ba59', title: 'PATENT_TITLE_3786' },
        ]}
    />
)

export default App