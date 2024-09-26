import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e49d5382-fe30-4515-88dd-5ef5866aefac', title: 'PATENT_TITLE_1141' },
            { id: '24e90160-57b2-4ed5-bc09-134519545e60', title: 'PATENT_TITLE_5363' },
        ]}
    />
)

export default App