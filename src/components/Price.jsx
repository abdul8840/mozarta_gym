import React from 'react'

const Price = () => {
    const price = [
        {
            head: "Class drop-in",
            cost: '₹1,000',
            f1: 'Free riding',
            f2: 'Unlimited equipments',
            f3: 'Personal trainer',
            f4: 'FWeight losing classes',
            f5: 'Month to mouth',
            f6: 'No time restriction',
            url: '#'
          },
        {
            head: "6Month unlimited",
            cost: '₹5,000',
            f1: 'Free riding',
            f2: 'Unlimited equipments',
            f3: 'Personal trainer',
            f4: 'FWeight losing classes',
            f5: 'Month to mouth',
            f6: 'No time restriction',
            url: '#'
          },
        {
            head: "12 Month unlimited",
            cost: '₹10,000',
            f1: 'Free riding',
            f2: 'Unlimited equipments',
            f3: 'Personal trainer',
            f4: 'FWeight losing classes',
            f5: 'Month to mouth',
            f6: 'No time restriction',
            url: '#'
          },
      ];
  return (
    <div className='mt-20 mb-10 max-w-5xl mx-auto'>
        <div className="text-center mb-8">
            <p className="text-xl font-semibold text-[#EE4E4E]">Our Plan</p>
            <h2 className='text-2xl font-bold'>CHOOSE YOUR PRICING PLAN</h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-5">
            {price.map((item, index) => (
                <div className="w-[320px]">
                    <div key={index} className="flex flex-col items-center justify-center gap-3 p-5 bg-[#111] text-white hover:bg-white hover:text-black rounded-md rounded-tr-3xl rounded-bl-3xl shadow-md">
                        <h2 className='text-xl font-bold'>{item.head}</h2>
                        <p className='text-3xl text-[#EE4E4E] font-bold'>{item.cost}</p>
                        <p className="text-lg font-bold">Single Class</p>
                        <ul className='text-center mt-5 mb-10 flex flex-col gap-1'>
                            <li className="text-sm font-semibold">{item.f1}</li>
                            <li className="text-sm font-semibold">{item.f2}</li>
                            <li className="text-sm font-semibold">{item.f3}</li>
                            <li className="text-sm font-semibold">{item.f4}</li>
                            <li className="text-sm font-semibold">{item.f5}</li>
                            <li className="text-sm font-semibold">{item.f6}</li>
                        </ul>
                        <a href="#" className='font-semibold border-2 border-[#EE4E4E] py-2 px-6 hover:bg-[#EE4E4E] hover:text-white rounded-xl'>Buy Now</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Price
