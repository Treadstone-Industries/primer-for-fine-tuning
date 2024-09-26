import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '07f2553b-8ba7-4e82-8858-944a462584c2', title: 'PATENT_TITLE_1983' },
            { id: '5d6c21f4-feae-4aa3-b609-5b1a95631e51', title: 'PATENT_TITLE_8594' },
            { id: '71d9f8cd-42fe-44ae-92e5-25be686af641', title: 'PATENT_TITLE_2953' },
            { id: '3b78cebf-e1ae-4b16-bd74-700b3447d480', title: 'PATENT_TITLE_1602' },
            { id: '42971352-9c51-45aa-82dd-fa2e3568af74', title: 'PATENT_TITLE_4810' },
            { id: '00ba050d-641e-495d-9fe6-30a84cbb5eb9', title: 'PATENT_TITLE_5335' },
            { id: '25148087-46e0-4de4-86fa-64eab3f9bafc', title: 'PATENT_TITLE_7370' },
        ]}
    />
)

export default App