import React from 'react'
import Card from './components/Card'
const App = () => {
  const jobOpenings = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      companyName: "Amazon",
      timeAgo: "5 days ago",
      role: "Senior Product Designer",
      type: "Part Time",
      level: "Senior Level",
      pay: "$120/hr",
      location: "Jhapa, Nepal"
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      timeAgo: "2 days ago",
      role: "Frontend Engineer",
      type: "Full Time",
      level: "Mid Level",
      pay: "$150/hr",
      location: "Kathmandu, Nepal"
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Microsoft",
      timeAgo: "1 day ago",
      role: "Cloud Solutions Architect",
      type: "Full Time",
      level: "Expert Level",
      pay: "$180/hr",
      location: "Remote"
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      timeAgo: "3 days ago",
      role: "UI/UX Researcher",
      type: "Contract",
      level: "Senior Level",
      pay: "$140/hr",
      location: "Pokhara, Nepal"
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      timeAgo: "1 week ago",
      role: "React Native Developer",
      type: "Full Time",
      level: "Mid Level",
      pay: "$135/hr",
      location: "Lalitpur, Nepal"
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      timeAgo: "4 days ago",
      role: "Backend Developer (Django)",
      type: "Internship",
      level: "Entry Level",
      pay: "$800/mo",
      location: "Kathmandu, Nepal"
    }
  ]
  return (
    <div className='parent'>

      {jobOpenings.map((e, idx) => (
        <Card key={idx} props={e} />
      ))}

        {/* {jobOpenings.map(function (e, idx) {
          return
          <Card key={idx} props={e} />
        })
        } */}
    </div>
  )
}

export default App