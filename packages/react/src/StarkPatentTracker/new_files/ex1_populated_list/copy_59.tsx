import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0f5f9651-52f7-4407-b58d-987db43f11de', title: 'PATENT_TITLE_7307' },
            { id: '4c15f174-b6a0-4b95-8edf-e99ffb80c802', title: 'PATENT_TITLE_1963' },
            { id: '80f15b1f-ddc8-4b45-a700-93baccd48795', title: 'PATENT_TITLE_7580' },
            { id: '6c639e3b-f797-4b6b-bc52-c88d40f8f534', title: 'PATENT_TITLE_7756' },
            { id: 'da6bff1d-0277-455f-a123-28902468cf19', title: 'PATENT_TITLE_3195' },
        ]}
    />
)

export default App