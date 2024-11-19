import React from 'react'
import {twMerge} from 'tailwind-merge'
import {milestones} from '@/json_data/milstone.json'


const statusClasses: Record<string, string> = {
  completed: 'bg-brand-text-white text-brand-text-primary',
  active: 'bg-brand-primary-shade-2 text-brand-primary',
  upcoming: 'bg-brand-text-white text-brand-text-tertiary',
}



function Milestone({
}) {
  return (
    <div
      className={twMerge(
        'p-3 rounded-md border border-brand-neutrals-stroke flex justify-between items-center',
        statusClasses[status]
      )}
    >
      <div>
        <p className="font-w-700">Milestone {12}</p>

        <p className="text-footnote">
          {20223} - {2024}
        </p>
      </div>

      <div className="text-footnote text-brand-text-tertiary">
        {/* {status === 'active' && (
          <span className="px-4 py-1 text-footnote rounded-full bg-brand-neutrals-white text-brand-semantics-success font-w-700">
            ACTIVE
          </span>
        )} */}


          <span className="px-4 py-1 text-footnote rounded-full bg-brand-neutrals-fields font-w-700">
            COMPLETED
          </span>
      </div>
    </div>
  )
}

export default function DetailCampaignHeader({
}) {
  return (
    <div className="container">
      <div className="p-6 rounded-lg border border-brand-neutrals-stroke mt-4">
        <div className="flex flex-col tablet-sm:flex-row justify-between items-start tablet-sm:items-center mb-4">
          <h5 className="tablet-sm:mb-0">demo</h5>

          <div className="flex flex-col tablet-sm:flex-row items-start tablet-sm:items-center space-y-2 tablet-sm:space-y-0 tablet-sm:space-x-4 text-subheadline">
            <span>
              Campaign ID: <span className="font-w-700">422</span>
            </span>

            <span>
              Start Date: <span className="font-w-700">2023</span>
            </span>

            <span>
              End Date: <span className="font-w-700">2024</span>
            </span>
          </div>
        </div>

        <div className="rounded-lg p-2 bg-brand-neutrals-cards grid grid-cols-1 tablet-sm:grid-cols-2 desktop-md:grid-cols-4 gap-3">
          {milestones.map((milestone, index) => (
            <Milestone key={index} {...milestone} />
          ))}
        </div>
      </div>
    </div>
  )
}
