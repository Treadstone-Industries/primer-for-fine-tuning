import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a5d62678-82cc-4b36-837b-64f691d107ee', title: 'PATENT_TITLE_4726' },
            { id: '7ee7e23e-a199-4112-ad4a-89e63df943af', title: 'PATENT_TITLE_5048' },
            { id: '3946c217-7a9e-4e9c-9361-de3caada3ccd', title: 'PATENT_TITLE_2701' },
            { id: '6a057d41-247f-4383-a86b-e3760e1ebdfa', title: 'PATENT_TITLE_8821' },
            { id: '034e6172-9127-497c-ba15-8d5c3061db01', title: 'PATENT_TITLE_3206' },
            { id: '52a256ab-dcd3-4d40-8af0-afd32c34eb41', title: 'PATENT_TITLE_5841' },
            { id: '1903a0fb-e984-4f97-a135-00a1ca67641c', title: 'PATENT_TITLE_6581' },
            { id: 'ff8399bd-c586-4838-af33-8a2c7aae956f', title: 'PATENT_TITLE_6526' },
            { id: '1d94fbc4-f27c-400c-a45f-a2ac1a926a39', title: 'PATENT_TITLE_5778' },
        ]}
    />
)

export default App