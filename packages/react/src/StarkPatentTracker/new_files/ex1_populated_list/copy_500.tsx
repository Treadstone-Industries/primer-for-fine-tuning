import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '162db423-6a2b-45a9-838b-b69547b2ad95', title: 'PATENT_TITLE_8521' },
            { id: 'd0280db2-c769-48fe-89b0-d46c0c781b76', title: 'PATENT_TITLE_5397' },
            { id: '9421241a-6ebd-4288-bc44-45f17a08fc3d', title: 'PATENT_TITLE_2320' },
            { id: '2c53b0cf-8ed5-401d-a9a7-3f1a1522963f', title: 'PATENT_TITLE_6673' },
            { id: '09b450bc-0e88-4b92-8639-00c33301c777', title: 'PATENT_TITLE_6017' },
            { id: '8c02e067-e3dc-4077-9551-ec468ebff47c', title: 'PATENT_TITLE_8065' },
            { id: '18b6bacc-b925-4f70-97cc-3b0fefb091ce', title: 'PATENT_TITLE_6178' },
            { id: '109fe065-f5ba-4205-8742-64e4a7f78f73', title: 'PATENT_TITLE_7247' },
            { id: 'eba3d774-9e97-4dcd-8b01-224e4e40f110', title: 'PATENT_TITLE_4647' },
        ]}
    />
)

export default App