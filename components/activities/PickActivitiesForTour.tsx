import React from 'react'
import InnerActivityCard from './shared/InnerActivityCard'

const PickActivitiesForTour = () => {
  return (
    <div className='text-center w-full mt-10'>
      <h2 className='font-bold text-2xl'>Види активного відпочинку, які  ви обрали</h2>

      <div className='p-4 flex-row w-full rounded-md shadow-lg mt-5 bg-white h-[330px] '>
        <div className='w-1/6'>
          <InnerActivityCard activity={{
            country: {
              icon: "ds",
              id: "ds",
              name: "ds"
            },
            description: "dsundefined",
            id: "dsd",
            name: "Test",
            price: 21,
            urls: ["https://s3-alpha-sig.figma.com/img/2ea9/caf3/0d0bccb9c7375266aacdaab8e2d795ac?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPHqiF5apFyUHCyaJe-jpcEfF0AWweKav7KEX~Kp3f9~cyQIIdy0QKTJtQfTKl8MOFDL9RHIXVcfyBMIPaJ7PRZyU2Cq1tZuuxqt40ff0-cuMJ49BqH4qCKv91hENAmXutONCF2xw3SiHZhHJh02JP94zP-6MxapFyffVs~YdSrwG58KlVTq9F7eTsZsegiaxlgDfQD9xKrriJDlv2W-IIJ-hC1axzo5CrJyn7eIU5BStreEH174Bcu2FNDAfR2AFhYvI9w8rYcIUw4Z8Bu-zg9LLXnZ9JLCWqY6idh2xgWXifcS6CjxRRr-eqzilekespu~qLdHGQZodA~lbnC9Sg__"]
          }} />

        </div>

        <div className='bg-primary h-full w-full'>

        </div>
      </div>


    </div>
  )
}

export default PickActivitiesForTour