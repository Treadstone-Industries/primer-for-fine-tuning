import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8242e4bf-fdfe-40bd-8840-7277119dfbc4', title: 'PATENT_TITLE_8244' },
            { id: 'e7a7e95c-7073-4667-bf36-a0145ff3f75d', title: 'PATENT_TITLE_1352' },
            { id: 'f1a75e17-3379-4354-a943-718081c86e7b', title: 'PATENT_TITLE_5049' },
            { id: 'bd906775-4751-4573-9775-89b350cff6e9', title: 'PATENT_TITLE_6948' },
            { id: '1e50d822-63a8-4b34-860d-1f3ecdb79064', title: 'PATENT_TITLE_5019' },
            { id: 'fb59273e-a0a6-4d93-bef2-cd70e9dbd522', title: 'PATENT_TITLE_3061' },
        ]}
    />
)

export default App