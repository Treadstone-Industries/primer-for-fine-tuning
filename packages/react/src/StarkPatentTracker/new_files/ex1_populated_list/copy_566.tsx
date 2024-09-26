import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '532781e9-328f-42e8-85fb-6d91859ee4fd', title: 'PATENT_TITLE_1958' },
            { id: '08cff911-e7c8-478e-8b3c-a1df7f38f9da', title: 'PATENT_TITLE_7092' },
            { id: '4159a2e5-6fe5-42d5-a76a-fef5eb57db18', title: 'PATENT_TITLE_3664' },
            { id: '8edfb3af-99e9-44f3-80a9-df07f6ed56c6', title: 'PATENT_TITLE_1425' },
            { id: 'f6e46aeb-038c-44de-bdda-120518100774', title: 'PATENT_TITLE_2273' },
            { id: '1704b10b-a2e5-4885-b139-2c7e2f386ef5', title: 'PATENT_TITLE_2019' },
            { id: 'f83109c2-9859-48c7-aa81-883e9f238ab8', title: 'PATENT_TITLE_1443' },
            { id: 'd2ac07fb-d454-40f3-993e-aca23b9d569c', title: 'PATENT_TITLE_7327' },
            { id: '0c9fa41e-02c9-471f-99fb-784cf2f65c6a', title: 'PATENT_TITLE_5271' },
            { id: '312c3b07-7263-4e3c-a746-83a10c936f0b', title: 'PATENT_TITLE_6553' },
        ]}
    />
)

export default App