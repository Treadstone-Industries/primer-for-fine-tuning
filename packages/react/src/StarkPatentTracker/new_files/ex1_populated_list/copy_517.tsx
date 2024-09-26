import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '19905df8-6f2d-4d1c-ba2d-43f3129d4feb', title: 'PATENT_TITLE_6165' },
            { id: '50f22246-95ce-4bd0-925b-8662304788ea', title: 'PATENT_TITLE_3033' },
            { id: '0b5fd213-fe38-4530-a453-677c7425c48c', title: 'PATENT_TITLE_2994' },
        ]}
    />
)

export default App