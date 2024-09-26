import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'da963c14-cbf6-423f-96fb-ebb401d6de74', title: 'PATENT_TITLE_4659' },
            { id: '9d49b7a8-4383-4e2f-911c-743ac2f021be', title: 'PATENT_TITLE_1121' },
            { id: 'ae92e570-86a0-4741-ab8d-3bce1484789a', title: 'PATENT_TITLE_6221' },
        ]}
    />
)

export default App