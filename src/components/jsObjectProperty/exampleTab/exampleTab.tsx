import { detailCampaignPageTabs } from "@/components/helpers/detailCampaignPageTabs";

export type DetailCampaignPageTabsType = typeof detailCampaignPageTabs;
type detailCampaignPageTabsType = DetailCampaignPageTabsType;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";


export const valueMap = {
  0:'activity',
  1:'tasks'
}

const ExampleTab = (tabs: detailCampaignPageTabsType) => {
  const [prevTab, setPrevTab] = useState('')
  const tabHeaderItems = Object.values(tabs).map((tab,index) => ({
    name: tab.name,
    value: valueMap[index],
    number: tab.number,
    icon: tab.svgIcon,
  }));

  useEffect(() => {
    setPrevTab(tabHeaderItems[0].value);
  },[])
  return (
    <div className="w-full">
      <div className="p-4 pt-0 bg-white border border-white">
        <div className="space-y-4">
          <Tabs
            defaultValue={tabs.activityTab?.value}
            orientation="vertical"
            className="flex
                 gap-6"
          >
            <TabsList className="mb-6 flex bg-white justify-between top-16 min-w-[20%] py-10">
              {tabHeaderItems.map((tab) => (
                <TabsTrigger
                  value={tab.value === undefined ? prevTab : tab.value}
                  onClick={() => {console.log(tab.value)}}
                  className={`data-[state=active]:text-blue-700 rounded-none
                    data-[state=active]:border-blue-700 ${tab.value === undefined ? 'data-[state=active]:text-none data-[state=active]:border-none': ''}`}
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="border-2 w-full flex items-center justify-center">
              <TabsContent
                value={tabs.activityTab.value}
                className=" min-w-full "
              >
                <div className="text-2xl font-bold text-blue-700 flex items-center justify-center">
                  This if tab for {tabs.activityTab.name}
                </div>
              </TabsContent>
              <TabsContent value={tabs.tasksTab.value} className="w-full ">
                <div className="text-2xl font-bold text-red-700 flex items-center justify-center">
                  This if tab for {tabs.tasksTab.name}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ExampleTab;
