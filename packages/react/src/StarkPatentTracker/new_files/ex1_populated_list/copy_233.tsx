import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '06696cbf-8d87-4b14-8b68-04493d643481', title: 'PATENT_TITLE_8110' },
            { id: '01153485-2bec-4ec0-a191-cca045ef2a52', title: 'PATENT_TITLE_7150' },
            { id: '153d1cd6-61b8-408e-93a3-83956528ab69', title: 'PATENT_TITLE_6065' },
            { id: '55c039ec-aca6-4fe5-b8a5-bdd670f623b0', title: 'PATENT_TITLE_3903' },
            { id: 'cd6e4a88-618e-4b07-8fe2-dd31b478160e', title: 'PATENT_TITLE_2014' },
            { id: '8275b4bc-6ab4-42cc-bb9f-065e6eea4c84', title: 'PATENT_TITLE_5929' },
            { id: 'e71055af-e679-4a60-96ca-8ee3be1ad428', title: 'PATENT_TITLE_5113' },
            { id: '18fc93ec-c35e-4a48-850e-94df84133832', title: 'PATENT_TITLE_5332' },
        ]}
    />
)

export default App