import DetailCampaignHeader from "./Header"

import { detailCampaignPageTabs } from "../helpers/detailCampaignPageTabs"
import ExampleTab from "./exampleTab/exampleTab"


// This component contains method of changing tab by shadcn component we use tsx file with array of object to do so

const ObjectAndShadTab = () => {
  return (
    <div>
        <DetailCampaignHeader/>
        <ExampleTab {...detailCampaignPageTabs}/>
    </div>
  )
}

export default ObjectAndShadTab