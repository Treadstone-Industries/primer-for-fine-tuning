import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '545b2ffa-2522-4625-ae85-ecc3674d7bc6', title: 'PATENT_TITLE_1598' },
            { id: '113ba17f-1965-471f-996f-8bce28690ddb', title: 'PATENT_TITLE_3357' },
        ]}
    />
)

export default App