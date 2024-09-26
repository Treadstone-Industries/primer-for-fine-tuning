import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '31f19610-b0a3-4014-8456-f854354f3793', title: 'PATENT_TITLE_7718' },
            { id: '5d0fdeb8-a9a7-4eb2-a780-7f8b00847411', title: 'PATENT_TITLE_3745' },
            { id: '963e1411-4992-4fb0-a0cb-db7c272a7022', title: 'PATENT_TITLE_9974' },
            { id: '8a3b2c54-e14b-4063-9bfe-8e3d3ce25d27', title: 'PATENT_TITLE_3366' },
            { id: 'dc501283-f9bc-4d45-9859-9ea37d100613', title: 'PATENT_TITLE_2139' },
            { id: '5b63aa37-22c0-4ac3-858e-abe894a5f3a1', title: 'PATENT_TITLE_5597' },
            { id: '323c1653-4d23-4ae6-b204-4361a79040fc', title: 'PATENT_TITLE_8083' },
        ]}
    />
)

export default App