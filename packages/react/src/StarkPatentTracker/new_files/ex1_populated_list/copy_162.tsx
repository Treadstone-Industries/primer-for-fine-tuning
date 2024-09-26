import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '33fe8b0b-6117-45e7-89cd-9bec1acc81eb', title: 'PATENT_TITLE_8232' },
            { id: 'f775c271-5948-4404-8d6e-ecffade26f30', title: 'PATENT_TITLE_7867' },
            { id: '6e85c2db-9395-4f09-be66-a286ba7bc24c', title: 'PATENT_TITLE_2921' },
            { id: '24178131-b8d8-48ea-bf65-f9ec6b1f7766', title: 'PATENT_TITLE_9967' },
            { id: '177159a0-d4a3-438d-8a81-1aeee0420a17', title: 'PATENT_TITLE_1422' },
            { id: '3408562e-478c-454c-a3e4-e765843139e5', title: 'PATENT_TITLE_6568' },
        ]}
    />
)

export default App