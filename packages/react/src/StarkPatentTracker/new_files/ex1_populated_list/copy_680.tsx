import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd10f8e10-a2a5-49fe-9438-d0b82bbbd167', title: 'PATENT_TITLE_1671' },
            { id: '0729ea49-2bfa-45fa-95d8-380651b255c9', title: 'PATENT_TITLE_5547' },
            { id: 'fc617025-d9b0-4330-beb3-13c82e0a2812', title: 'PATENT_TITLE_3453' },
            { id: 'e51802ac-1d61-429d-bda7-12a7476e9ddf', title: 'PATENT_TITLE_3532' },
            { id: 'f6fd7744-cc0c-403b-9568-58c7c65fffb0', title: 'PATENT_TITLE_2408' },
            { id: '717e9c9b-1a93-42df-bd11-5f0e985c6417', title: 'PATENT_TITLE_1369' },
            { id: 'de4c29ab-5abc-43ea-ae29-af0323c058e7', title: 'PATENT_TITLE_1914' },
            { id: '4bcca8d7-953d-4c81-85a8-eabfb49c1b43', title: 'PATENT_TITLE_6651' },
        ]}
    />
)

export default App