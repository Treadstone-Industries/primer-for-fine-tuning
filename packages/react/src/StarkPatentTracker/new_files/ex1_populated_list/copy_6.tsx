import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6d9e2fb9-03cc-4618-96d2-3d04a8e49909', title: 'PATENT_TITLE_2216' },
            { id: '9a12a8b1-73ad-435d-83df-93f41a4269ff', title: 'PATENT_TITLE_4270' },
            { id: '5b9c6059-733c-4b98-b415-214e842db916', title: 'PATENT_TITLE_8011' },
            { id: '05ec97a3-e1dc-40e8-8899-f302da04cbf2', title: 'PATENT_TITLE_2188' },
            { id: '20d3f9f7-746b-479c-ae76-f39dedbfecf9', title: 'PATENT_TITLE_9087' },
        ]}
    />
)

export default App