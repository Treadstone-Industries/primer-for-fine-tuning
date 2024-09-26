import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '99567ef5-f6bc-4970-950e-b6c06ff1775b', title: 'PATENT_TITLE_2939' },
            { id: '83b56502-10e6-4dbb-b8b9-00417e89720b', title: 'PATENT_TITLE_2004' },
            { id: 'ab76588b-3cda-420c-a7df-84a0d6389511', title: 'PATENT_TITLE_5636' },
            { id: 'd341515e-459d-4f3e-95a0-382c599b2c98', title: 'PATENT_TITLE_5213' },
            { id: '53db442f-c72b-41f5-adc0-3ae4b6496aae', title: 'PATENT_TITLE_4897' },
            { id: 'c191589b-298a-48ff-9375-b7b273d1ec82', title: 'PATENT_TITLE_9068' },
            { id: 'ac9901c0-88d2-417f-af54-2d6408adc56a', title: 'PATENT_TITLE_4959' },
            { id: '3720cf8b-3913-49ae-90aa-26456425bfbe', title: 'PATENT_TITLE_7026' },
        ]}
    />
)

export default App