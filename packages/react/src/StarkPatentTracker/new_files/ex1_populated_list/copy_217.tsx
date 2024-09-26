import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd054052d-317e-4533-bda0-cbf14c27289f', title: 'PATENT_TITLE_8427' },
            { id: 'bae949a8-5909-4d76-b162-dc3bfabbbc03', title: 'PATENT_TITLE_3388' },
            { id: '80c412f1-1f24-4079-8229-cee0b99797f5', title: 'PATENT_TITLE_3648' },
            { id: '7fadc338-1bb4-4495-a489-08e80ef9d31c', title: 'PATENT_TITLE_5821' },
            { id: '8eb502b6-db79-49ab-8d00-ab820ca3de6e', title: 'PATENT_TITLE_5634' },
            { id: 'e58df90d-42d5-43cd-8632-78582e017f39', title: 'PATENT_TITLE_9774' },
            { id: '0f94004f-334c-49dc-b1b4-804d3ef7fbfd', title: 'PATENT_TITLE_9702' },
        ]}
    />
)

export default App