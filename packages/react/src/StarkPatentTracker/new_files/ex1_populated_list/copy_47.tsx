import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e083a708-fc01-4c53-bfdb-cdc759f407ff', title: 'PATENT_TITLE_4818' },
            { id: 'dcf6b80f-497f-4e92-a312-2ed14cd86832', title: 'PATENT_TITLE_5994' },
            { id: '59d95f4e-8cfe-41b7-95fe-e2b016f1e07a', title: 'PATENT_TITLE_7471' },
            { id: 'adf72416-733f-4ce0-aafa-a82ad475daac', title: 'PATENT_TITLE_4580' },
            { id: '12aabce4-d23e-407f-8da1-ee2316e87061', title: 'PATENT_TITLE_1889' },
            { id: '57fa9125-9208-459b-8a1c-9401cdba47c9', title: 'PATENT_TITLE_2038' },
            { id: '6ea8e81f-5a83-4f87-a26c-cd5e62deb877', title: 'PATENT_TITLE_4097' },
            { id: '6a08143c-fe71-47c9-ba88-2df7ceb42108', title: 'PATENT_TITLE_4159' },
        ]}
    />
)

export default App