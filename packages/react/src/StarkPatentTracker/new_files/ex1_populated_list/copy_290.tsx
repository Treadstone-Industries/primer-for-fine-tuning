import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'aabd4926-2b8e-4758-80b2-a2716dccccb2', title: 'PATENT_TITLE_9344' },
            { id: 'b7375669-c50d-48dc-8fbc-65cd3f45a677', title: 'PATENT_TITLE_4662' },
            { id: '5fadb9b3-50bb-4239-922e-8e512247744d', title: 'PATENT_TITLE_8552' },
            { id: '26b23c89-9744-4a6d-8e03-bfc026f66da5', title: 'PATENT_TITLE_4436' },
            { id: '2ccdf932-a54a-4f23-9850-3b3b7e867917', title: 'PATENT_TITLE_2193' },
            { id: '2d1d90b8-15e0-4390-9147-2a421ecb2db6', title: 'PATENT_TITLE_4436' },
            { id: 'eef9952b-92b1-4b6f-a19d-aaf0d0001a7b', title: 'PATENT_TITLE_1257' },
        ]}
    />
)

export default App