import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e09696bd-89dd-4442-a94c-93563bdfd1c1', title: 'PATENT_TITLE_2319' },
            { id: '2398f706-2408-4599-868c-b9060beaedd0', title: 'PATENT_TITLE_6221' },
            { id: 'd06a2ba2-ae60-4b7d-8d07-0c1b03df9676', title: 'PATENT_TITLE_7913' },
            { id: '45fda4f2-db2b-4e12-a364-0dece7fe616c', title: 'PATENT_TITLE_8640' },
            { id: 'abd84d5a-82b3-4e66-968b-3e278ec20d4e', title: 'PATENT_TITLE_9226' },
        ]}
    />
)

export default App