import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9f4a3992-d0dd-4dff-9882-ac149b7ae554', title: 'PATENT_TITLE_1311' },
        { id: '7cb5f02a-0247-4ada-a585-bae17966c766', title: 'PATENT_TITLE_4702' },
        { id: 'f1d04a61-d478-44f6-a387-31a533e88e9b', title: 'PATENT_TITLE_8008' },
        { id: 'ec2e4825-0fa8-40c8-827f-ce2b2b3ab464', title: 'PATENT_TITLE_9762' },
        { id: '8b65db14-a315-4979-a8d1-c47121955a5b', title: 'PATENT_TITLE_1345' },
        { id: '6e4e9aba-f236-4e31-9196-e46c9af4c943', title: 'PATENT_TITLE_1053' },
        { id: '2f03c2a7-b7fb-40b3-8287-5798b061adad', title: 'PATENT_TITLE_9174' },
        { id: '2e7e1eca-3afb-4979-9565-6cfb2ae2654e', title: 'PATENT_TITLE_6432' },
        { id: 'e2a4ce2d-f9b7-4a97-a56b-28245a52d7c8', title: 'PATENT_TITLE_6974' },
        { id: '8d36a33e-796d-4658-996f-50d3e11876c2', title: 'PATENT_TITLE_7710' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App