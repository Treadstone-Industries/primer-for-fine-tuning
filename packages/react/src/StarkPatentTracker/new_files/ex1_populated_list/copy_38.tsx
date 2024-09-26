import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '05551e15-6ea3-42e2-a861-f035a7b49c79', title: 'PATENT_TITLE_1344' },
            { id: 'eaca5bcb-a99c-4530-b253-15754869daf2', title: 'PATENT_TITLE_7665' },
            { id: '7af7739c-e4b2-4a35-9275-f9e4afd7727f', title: 'PATENT_TITLE_3055' },
            { id: 'a6a13d18-2eb8-42ec-86f8-ead69610abc8', title: 'PATENT_TITLE_8495' },
            { id: '79377dd3-0679-48de-bcc4-c3d0244264ab', title: 'PATENT_TITLE_2712' },
            { id: '0e267310-a730-492e-86c9-48bdf8a53f7b', title: 'PATENT_TITLE_6501' },
        ]}
    />
)

export default App