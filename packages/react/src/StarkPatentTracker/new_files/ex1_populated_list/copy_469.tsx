import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dd9fb3d9-faee-43e1-afeb-d6df21b1de32', title: 'PATENT_TITLE_1230' },
            { id: 'f76a39b6-6f74-4a57-aa63-2cc13d77ea15', title: 'PATENT_TITLE_9868' },
            { id: 'bed705cd-58cd-47b6-bf08-0fed423ea11f', title: 'PATENT_TITLE_8927' },
            { id: '75061b16-866e-4910-9c8f-ad6eab3ca168', title: 'PATENT_TITLE_1703' },
            { id: '216e740c-6ef7-452e-82bc-b08d02bf41d4', title: 'PATENT_TITLE_6116' },
            { id: '1d48cb6f-d695-4e70-8826-031741e20a62', title: 'PATENT_TITLE_8983' },
        ]}
    />
)

export default App