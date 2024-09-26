import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9d11375a-8c27-4085-8df6-bc0d913efcc5', title: 'PATENT_TITLE_3239' },
            { id: 'df7a780a-70bc-4f4b-92a1-1ae263994bf5', title: 'PATENT_TITLE_4765' },
            { id: 'bf90286d-05e1-47df-9c15-468c5cc5e065', title: 'PATENT_TITLE_9521' },
            { id: 'ddec3c3b-1425-4666-8dde-ce65d2bd1814', title: 'PATENT_TITLE_7483' },
            { id: '34505cdb-078e-407e-ba96-732bd992a211', title: 'PATENT_TITLE_4184' },
        ]}
    />
)

export default App