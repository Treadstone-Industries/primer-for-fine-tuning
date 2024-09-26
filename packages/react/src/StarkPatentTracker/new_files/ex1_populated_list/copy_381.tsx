import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'beae2924-3c38-4f8b-9299-42ddbfec1051', title: 'PATENT_TITLE_4953' },
            { id: 'ef1c997d-2dc0-4915-9526-f85de1051d7a', title: 'PATENT_TITLE_6389' },
            { id: 'cb01157c-1de2-4627-85dc-18993ed50345', title: 'PATENT_TITLE_5462' },
            { id: 'f98260ba-842b-4798-8d84-f9cf924c1d68', title: 'PATENT_TITLE_7654' },
        ]}
    />
)

export default App