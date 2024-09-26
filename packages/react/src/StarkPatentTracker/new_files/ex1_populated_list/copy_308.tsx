import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cb20cd30-37c4-4673-87ea-605d3c964115', title: 'PATENT_TITLE_7242' },
            { id: 'f57c761a-7687-4264-a9c8-d5bd409b0739', title: 'PATENT_TITLE_9608' },
            { id: '815eb994-023b-44ee-962c-6e72a627820f', title: 'PATENT_TITLE_5616' },
            { id: '26bfdab1-0b76-4dae-a1b8-479efa697a25', title: 'PATENT_TITLE_8874' },
            { id: '90a49221-a8a5-41af-9998-ebb4e923ba4d', title: 'PATENT_TITLE_4500' },
            { id: '1a119f01-d6d5-4aaf-8d6a-3799c98c847c', title: 'PATENT_TITLE_2175' },
        ]}
    />
)

export default App