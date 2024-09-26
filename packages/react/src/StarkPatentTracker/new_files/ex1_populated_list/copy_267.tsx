import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '386fe644-75dc-42e0-ae00-3013d045259a', title: 'PATENT_TITLE_7038' },
            { id: '0aa51fed-5ab1-477f-9944-bb4982a3bc09', title: 'PATENT_TITLE_3957' },
            { id: 'c59b9efc-9809-4c31-8019-5deee815d7c0', title: 'PATENT_TITLE_6986' },
            { id: 'b9c3e3b9-5058-4414-b649-893ea0be5f3e', title: 'PATENT_TITLE_3949' },
            { id: 'b1bf18e9-d842-4ecf-9b2b-85231581fe67', title: 'PATENT_TITLE_2708' },
            { id: 'b55bd703-7f95-4c6d-a20c-5305389fdacd', title: 'PATENT_TITLE_1992' },
            { id: '030156b8-36cd-4276-abe5-0c190e917385', title: 'PATENT_TITLE_1859' },
            { id: '62395139-5d21-46dd-8e03-d90f3439003d', title: 'PATENT_TITLE_4875' },
            { id: '7362c4f7-fe2c-4dfb-b077-36b5c2edaf07', title: 'PATENT_TITLE_2698' },
            { id: 'd489adcb-88d5-43a9-9f28-9670501ec559', title: 'PATENT_TITLE_9195' },
        ]}
    />
)

export default App