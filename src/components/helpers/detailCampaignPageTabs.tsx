const detailCampaignPageTabs = {
    activityTab: {
      name: 'Activity',
      value: 'activity',
      number: 4,
      svgIcon: (
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline"
        >
          <path
            d="M9.75 1H2.75C2.28587 1 1.84075 1.16857 1.51256 1.46863C1.18437 1.76869 1 2.17565 1 2.6V15.4C1 15.8243 1.18437 16.2313 1.51256 16.5314C1.84075 16.8314 2.28587 17 2.75 17H13.25C13.7141 17 14.1592 16.8314 14.4874 16.5314C14.8156 16.2313 15 15.8243 15 15.4V5.8M9.75 1L15 5.8M9.75 1V4.8C9.75 5.35229 10.1977 5.8 10.75 5.8H15M11.5 9.8H4.5M11.5 13H4.5M6.25 6.6H4.5"
            stroke="#030013"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
          />
        </svg>
      ),
      content: {
        activities: [
          {
            name: 'Katie Smith',
            description: {
              title: 'added a comment',
              detail:
                "The campaign is on track, since its launch, we've seen incredible engagement from our audience, with thousands of people visiting our website and social media channels.",
            },
            profileImageUrl: 'assets/profile_image_katiesmith.png',
            activityDate: '12 June 2003',
            activityTime: '10:00 AM',
            activityChannel: {
              title: 'Nano-trial',
              subTitle: 'Scan & Collect',
            },
          },
          {
            name: 'Dash Water',
            description: {
              title: 'approved the demographics section',
              detail:
                "The campaign is on track, since its launch, we've seen incredible engagement from our audience, with thousands of people visiting our website and social media channels.",
            },
            profileImageUrl: 'assets/profile_image_dashwater.png',
            activityDate: '12 June 2003',
            activityTime: '10:00 AM',
            activityChannel: {
              title: 'Nano-trial',
              subTitle: 'Scan & Collect',
            },
          },
        ],
      },
    },
  
    tasksTab: {
      name: 'Tasks',
      value: 'tasks',
      number: 16,
      svgIcon: (
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline"
        >
          <path
            d="M10 2.6H11.5C11.8978 2.6 12.2794 2.76857 12.5607 3.06863C12.842 3.36869 13 3.77565 13 4.2V15.4C13 15.8243 12.842 16.2313 12.5607 16.5314C12.2794 16.8314 11.8978 17 11.5 17H2.5C2.10218 17 1.72064 16.8314 1.43934 16.5314C1.15804 16.2313 1 15.8243 1 15.4V4.2C1 3.77565 1.15804 3.36869 1.43934 3.06863C1.72064 2.76857 2.10218 2.6 2.5 2.6H4M4.75 1H9.25C9.66421 1 10 1.35817 10 1.8V3.4C10 3.84183 9.66421 4.2 9.25 4.2H4.75C4.33579 4.2 4 3.84183 4 3.4V1.8C4 1.35817 4.33579 1 4.75 1Z"
            stroke="#030013"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
          />
        </svg>
      ),
      content: {
        tasks: [
          {
            taskChannel: {
              title: 'Nano-trial',
              subTitle: 'Scan & Collect',
            },
            isTaskOverDue: false,
            taskOwner: 'Jessica Jones',
            dueDate: '25 Jun 2023',
            taskDescription:
              'Approve the demographics on the campaign and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.',
          },
          {
            taskChannel: {
              title: 'Nano-trial',
              subTitle: 'Scan & Collect',
            },
            isTaskOverDue: true,
            taskOverDueMessage: 'This task is overdue; please complete it.',
            taskOwner: 'Jessica Jones',
            dueDate: '25 Jun 2023',
            taskDescription:
              'Approve the demographics on the campaign and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.',
          },
        ],
      },
    },
}

export {detailCampaignPageTabs}