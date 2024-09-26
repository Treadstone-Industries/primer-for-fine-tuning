import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c59f8c78-9eeb-4cbc-9533-c6f044bf1191', title: 'PATENT_TITLE_2299' },
            { id: '52d68bfc-27f6-4292-a98d-1a4e4843117e', title: 'PATENT_TITLE_2606' },
            { id: '3e97ac2e-5123-4b16-a612-0edc64e9cb64', title: 'PATENT_TITLE_3320' },
            { id: '5e71ec4a-6df4-4328-9a3e-49d8d64e6796', title: 'PATENT_TITLE_4444' },
            { id: '2f5b3e3c-414d-4238-a894-b6775daf6b39', title: 'PATENT_TITLE_6011' },
            { id: 'dbc03ae0-e3f0-4bde-8c17-78ed843c154f', title: 'PATENT_TITLE_3953' },
            { id: '8193d8a1-67bd-4296-881b-d30b83ab9c6c', title: 'PATENT_TITLE_6732' },
            { id: 'd40460db-e0bb-4e48-8323-8a5cb54f60a5', title: 'PATENT_TITLE_7087' },
            { id: '915b092b-c391-46e2-9fa3-80eea6b6ebe7', title: 'PATENT_TITLE_3244' },
        ]}
    />
)

export default App