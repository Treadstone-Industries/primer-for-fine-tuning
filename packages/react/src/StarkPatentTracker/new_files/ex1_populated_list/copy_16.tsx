import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '847ac039-f45a-44e3-869c-df9122b376d9', title: 'PATENT_TITLE_2784' },
            { id: '4a971fc2-553f-4e03-8415-4f9ca61f917f', title: 'PATENT_TITLE_6144' },
        ]}
    />
)

export default App