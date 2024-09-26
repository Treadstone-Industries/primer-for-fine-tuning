import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd8f075d8-b2fb-4db8-b8e0-2eaddde4804e', title: 'PATENT_TITLE_8438' },
            { id: '30cc232d-3b60-4322-9b68-51d176a9f152', title: 'PATENT_TITLE_9193' },
            { id: 'c54ce82c-5d97-4e6b-96a0-d6a24210dcec', title: 'PATENT_TITLE_3147' },
            { id: '95257b80-acda-4b6c-bacd-4e6eb53af7b3', title: 'PATENT_TITLE_1837' },
            { id: 'a4d5fd74-6ed5-4d4b-9fc4-56ac23b87779', title: 'PATENT_TITLE_5606' },
            { id: 'a1793611-7d72-49f1-b8c9-37cc50e9a22f', title: 'PATENT_TITLE_1219' },
            { id: 'c299e59f-5631-4f3d-bccd-d2206a905c7f', title: 'PATENT_TITLE_2323' },
            { id: 'f9319351-cd01-47aa-b425-abd30779344d', title: 'PATENT_TITLE_6362' },
            { id: 'b3c1d83d-991f-43c5-bed7-962da9f9c578', title: 'PATENT_TITLE_2549' },
        ]}
    />
)

export default App