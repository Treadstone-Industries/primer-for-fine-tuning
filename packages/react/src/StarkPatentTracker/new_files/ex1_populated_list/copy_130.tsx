import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c360b7a1-673e-4f4f-8bc4-47775d3cca78', title: 'PATENT_TITLE_9678' },
            { id: '18bbc466-7c0c-4187-8ac8-6994617da17c', title: 'PATENT_TITLE_7556' },
            { id: '81df5e8f-0eb3-4281-8896-fddd734fa74b', title: 'PATENT_TITLE_8347' },
            { id: 'e6e1b373-1507-47fb-a1c0-c193a9825abf', title: 'PATENT_TITLE_3362' },
            { id: '653fe105-6073-4eda-89a4-f1f133a4c2e3', title: 'PATENT_TITLE_2124' },
            { id: '026fc160-cccd-492c-87b4-26042bcd19d6', title: 'PATENT_TITLE_2232' },
            { id: '532bcfd9-c3e8-4b69-8d63-e8461dba6a33', title: 'PATENT_TITLE_2354' },
        ]}
    />
)

export default App