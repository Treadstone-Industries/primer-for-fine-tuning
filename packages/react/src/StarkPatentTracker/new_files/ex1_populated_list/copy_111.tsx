import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '01ae7db9-d279-46ff-8f6e-737269833a62', title: 'PATENT_TITLE_1959' },
            { id: '313b9fc4-4b0c-49dd-bd3f-48928983b0eb', title: 'PATENT_TITLE_1818' },
            { id: 'fa026ae4-3009-4218-94a7-a85237a3751c', title: 'PATENT_TITLE_8337' },
            { id: '2f40011c-0848-4703-8bb5-69c2d5a5b9a3', title: 'PATENT_TITLE_1361' },
            { id: 'dfa85d1b-21a6-40c1-b7af-bc7db07a7f06', title: 'PATENT_TITLE_5911' },
            { id: 'f59dca75-3085-47e8-8f90-ede05e702ab1', title: 'PATENT_TITLE_4639' },
            { id: '44703412-6c57-44da-bb46-a7713ccb856e', title: 'PATENT_TITLE_2219' },
            { id: '8a110dac-5197-4293-b4bd-0c41a5024742', title: 'PATENT_TITLE_6935' },
            { id: '9f768b9f-dc88-41f0-a8de-fbc46413bda9', title: 'PATENT_TITLE_8053' },
            { id: 'df8b53a7-3bfd-4d57-bfa3-6509576cdd37', title: 'PATENT_TITLE_5814' },
        ]}
    />
)

export default App