import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3e80cafe-aff6-4c80-975e-f7f348acf0d2', title: 'PATENT_TITLE_8270' },
            { id: 'ba35c64a-694c-4c4c-942d-e248e261367e', title: 'PATENT_TITLE_4172' },
            { id: 'a07427da-3c08-4959-821f-21dac04d01fa', title: 'PATENT_TITLE_1640' },
            { id: 'b1f9ba9e-aba6-4411-a96d-4f619818b43a', title: 'PATENT_TITLE_6178' },
        ]}
    />
)

export default App