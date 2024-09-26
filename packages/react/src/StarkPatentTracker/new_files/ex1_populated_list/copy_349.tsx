import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '75e197c7-79fe-42c8-9750-5807bd73836d', title: 'PATENT_TITLE_3351' },
            { id: '47334f0f-49ca-484c-bbbf-2a2f46562476', title: 'PATENT_TITLE_5212' },
            { id: 'f7e037cc-4007-4812-8214-7a21624cdba6', title: 'PATENT_TITLE_3642' },
            { id: '8ad4af6c-6d5e-4c63-b360-fdc805f99e31', title: 'PATENT_TITLE_3546' },
            { id: '369ac42f-e8de-4759-b59d-0d97155d59ca', title: 'PATENT_TITLE_1235' },
            { id: 'f8501586-2e62-4cbd-a00f-f5ae99e3eda8', title: 'PATENT_TITLE_8993' },
            { id: '79daa02e-03ca-450e-8477-99e08c292370', title: 'PATENT_TITLE_5251' },
            { id: '884736f1-760d-4a2f-bfcc-4355add00a18', title: 'PATENT_TITLE_7726' },
        ]}
    />
)

export default App