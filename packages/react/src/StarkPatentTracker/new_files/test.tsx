import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1faeb979-3e3b-490a-84ee-8268a153c989', title: 'PATENT_TITLE_5717' },
            { id: '3297d956-9c47-43b8-ba6f-a4fb00083b05', title: 'PATENT_TITLE_5666' },
            { id: '0ad09108-faf0-4a7b-a79c-a8b9cd54277b', title: 'PATENT_TITLE_3411' },
            { id: '19800a13-1bd3-498c-ad27-b841e6f5de44', title: 'PATENT_TITLE_5115' },
            { id: 'ae984a77-b6df-417b-90e4-c6bc51eea7df', title: 'PATENT_TITLE_2143' },
            { id: 'b997eac1-2fcf-4251-83c7-923232d4ab88', title: 'PATENT_TITLE_9741' },
            { id: 'e8ccf744-f62b-40a8-829c-b4abe426d7cc', title: 'PATENT_TITLE_3810' },
            { id: 'bd1acc65-6971-4ff9-b5e0-829df2e2faa3', title: 'PATENT_TITLE_2055' },
            { id: '8a0b4d0e-beaf-4351-8476-a21708472492', title: 'PATENT_TITLE_4682' },
            { id: '1e8305ff-c457-4df2-9265-ff93c62bbdf6', title: 'PATENT_TITLE_8087' },
        ]}
    />
)

export default App