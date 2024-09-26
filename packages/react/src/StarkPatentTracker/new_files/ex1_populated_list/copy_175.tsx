import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bec8bc89-8f9d-4c1b-9424-0c9e8c0f2579', title: 'PATENT_TITLE_3976' },
            { id: '6e1ab953-fc69-4aff-aa68-69c51b016ba4', title: 'PATENT_TITLE_2220' },
            { id: 'eb5e321f-b7d7-48f0-84ca-414456a5f0e9', title: 'PATENT_TITLE_8521' },
            { id: 'e533cbec-3637-4981-9d29-ead6db84cc76', title: 'PATENT_TITLE_4235' },
            { id: 'd1d7fe6d-a826-402d-889a-faa33b48fc7e', title: 'PATENT_TITLE_7411' },
            { id: '31c97acb-25aa-49aa-8f18-fec652a0cddc', title: 'PATENT_TITLE_7873' },
            { id: '0cbc7481-0b3d-4933-b937-8c7f0c5ca834', title: 'PATENT_TITLE_2320' },
            { id: '8b9fed66-19ec-4a24-8d4c-4a5e3cdc208d', title: 'PATENT_TITLE_1169' },
            { id: 'd2ee8172-08d2-4582-8877-940ebbc9601b', title: 'PATENT_TITLE_1926' },
            { id: '99059d98-3bc3-4571-ba1d-39f03541afb8', title: 'PATENT_TITLE_6724' },
        ]}
    />
)

export default App