import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '03b9c0b7-a09e-4084-a76e-bacc342c0973', title: 'PATENT_TITLE_2698' },
            { id: '49be1a1d-39a2-4858-9ccd-db2b64f7e028', title: 'PATENT_TITLE_9187' },
            { id: '2e848942-2d35-4993-8b52-87b13ead90fd', title: 'PATENT_TITLE_3318' },
            { id: '5b16688f-e58e-4174-b078-4829784599f6', title: 'PATENT_TITLE_3977' },
            { id: '22f55cff-ac02-40eb-b29c-4f4aee433d3e', title: 'PATENT_TITLE_5933' },
            { id: '7f9eaa37-625b-45c2-bcb3-f96c325cbc22', title: 'PATENT_TITLE_3244' },
        ]}
    />
)

export default App