import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fbec70ef-a7d0-4fef-a643-65f94f386745', title: 'PATENT_TITLE_7396' },
            { id: '4479296d-6be0-40fa-861f-257c17c77665', title: 'PATENT_TITLE_3520' },
            { id: 'a448defc-745f-4f6a-887f-aaff84ffd7bc', title: 'PATENT_TITLE_8993' },
            { id: '07b250cc-1225-4688-81ab-2324a24197c3', title: 'PATENT_TITLE_3187' },
            { id: 'ce1023c5-5736-4d0e-be98-09461b1ecdf7', title: 'PATENT_TITLE_9454' },
            { id: '2f294425-5b78-4803-8fcf-847c5cf551c0', title: 'PATENT_TITLE_7814' },
            { id: '6e97198f-b490-4103-a443-732864ff195b', title: 'PATENT_TITLE_5962' },
            { id: '1b140ab1-ba2d-42b4-bb5b-7851dd71bd8c', title: 'PATENT_TITLE_9450' },
            { id: '220c97f5-9764-4846-8f1e-842d73633b0e', title: 'PATENT_TITLE_9627' },
            { id: '3eca4217-5a5d-4cd1-8c6a-08e8adddb204', title: 'PATENT_TITLE_1581' },
        ]}
    />
)

export default App