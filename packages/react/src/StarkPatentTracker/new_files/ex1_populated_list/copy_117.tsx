import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'aae6da15-31d6-4f6f-91cc-762ee510a8e5', title: 'PATENT_TITLE_5204' },
            { id: '4933f47b-1d3c-417a-a438-dd5a4c129bdd', title: 'PATENT_TITLE_9728' },
            { id: 'd7efdb1f-c185-4a49-9e23-650e41faa2bc', title: 'PATENT_TITLE_9877' },
            { id: '272f1965-ee13-4779-aadc-14322727ae09', title: 'PATENT_TITLE_3032' },
            { id: '7bc9b92f-b227-4adf-994e-a8299a528e0b', title: 'PATENT_TITLE_6644' },
        ]}
    />
)

export default App