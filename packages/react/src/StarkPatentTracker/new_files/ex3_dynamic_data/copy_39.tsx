import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '45809cfe-573a-4690-a256-fb87330a9c51', title: 'PATENT_TITLE_1581' },
        { id: 'f239e9cb-fa24-4e80-ac2c-d295f7c7cca0', title: 'PATENT_TITLE_7792' },
        { id: 'efff3b3d-d751-4b7b-9605-e1425b914a66', title: 'PATENT_TITLE_6294' },
        { id: 'adf177c6-361e-4512-ab9c-b259624ed4fe', title: 'PATENT_TITLE_1252' },
        { id: 'c5c09961-e2f7-43a1-81f8-96e4637fb0f5', title: 'PATENT_TITLE_8168' },
        { id: '2245be36-3074-4f6b-8dd2-0a5798f10830', title: 'PATENT_TITLE_3570' },
        { id: 'ae8a377d-5d79-437c-a0f8-209964d5b2ac', title: 'PATENT_TITLE_9660' },
        { id: 'ea57201b-625a-4feb-a710-af331c851757', title: 'PATENT_TITLE_6119' },
        { id: 'dd0b2d09-d2f7-48e1-8db0-d7a395967acf', title: 'PATENT_TITLE_5295' },
        { id: '6b8df149-f2b6-4316-8223-0df1818419d9', title: 'PATENT_TITLE_1993' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App