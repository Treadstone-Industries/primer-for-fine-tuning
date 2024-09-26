import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9100564c-a765-40ad-ab85-559551377d1c', title: 'PATENT_TITLE_6817' },
            { id: 'dcdf914f-b8ab-4f21-8cb0-7785e7d28304', title: 'PATENT_TITLE_7620' },
        ]}
    />
)

export default App