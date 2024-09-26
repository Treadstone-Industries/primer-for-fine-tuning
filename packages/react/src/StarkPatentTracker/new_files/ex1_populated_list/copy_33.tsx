import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '831beca2-3b4d-49e9-8c35-d189a83efce5', title: 'PATENT_TITLE_7904' },
            { id: '74e24a46-645f-4f01-b79c-9f4c4b2207d6', title: 'PATENT_TITLE_5598' },
            { id: 'c75e6274-f529-406d-b943-14559b3f3dfb', title: 'PATENT_TITLE_5325' },
            { id: '3b3826ce-1bca-4768-8281-ecb6fff93446', title: 'PATENT_TITLE_4895' },
            { id: '7c23727d-c6be-4152-9a6d-0956a1bc20d7', title: 'PATENT_TITLE_7603' },
            { id: 'f91ca0df-7bf6-4c31-b394-2902120fdddf', title: 'PATENT_TITLE_8489' },
            { id: '368f701e-17de-45a7-a0c7-7deafd48ac61', title: 'PATENT_TITLE_2192' },
        ]}
    />
)

export default App