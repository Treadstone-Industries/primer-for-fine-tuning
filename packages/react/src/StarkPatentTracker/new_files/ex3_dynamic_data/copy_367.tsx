import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ac85e405-d4af-4398-811e-d8ca8a40ec00', title: 'PATENT_TITLE_1219' },
        { id: '9e6803dd-bbc7-4f32-a70a-324393cb3140', title: 'PATENT_TITLE_9016' },
        { id: 'aa142952-a674-4219-873a-48c320843cd8', title: 'PATENT_TITLE_5067' },
        { id: 'c31c6b0e-8458-4e2b-89a6-175f0e90cf51', title: 'PATENT_TITLE_8953' },
        { id: 'f51097d6-ca1c-434b-8ac5-9f55226028f7', title: 'PATENT_TITLE_8936' },
        { id: '4b1f013e-38f8-4313-977c-f917aef72876', title: 'PATENT_TITLE_9508' },
        { id: '706252ba-5540-4c4f-8fdc-f3c8b6fd4173', title: 'PATENT_TITLE_9721' },
        { id: '35b77950-5132-4914-b42a-5b395a0b2229', title: 'PATENT_TITLE_4546' },
        { id: '172d33ea-379c-455f-9aa2-5c4979d43b73', title: 'PATENT_TITLE_2366' },
        { id: 'f547d0c1-9a89-4b30-a42e-aeec96f58678', title: 'PATENT_TITLE_6870' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App