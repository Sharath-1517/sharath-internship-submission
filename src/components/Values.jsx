import React from 'react'

const Values = () => {

    const values_data = [
        {
        "title": "Integrity",
        "description": "Upholding high ethical standards, honesty, transparency, and building trust.",
        "imgURL": "integrity.png"
        },
        {
        "title": "Reliability",
        "description": "Consistently delivering on commitments and being dependable.",
        "imgURL": "reliability.png"
        },
        {
        "title": "Customer-centricity",
        "description": "Understanding and meeting customer needs, exceptional service, and building lasting relationships.",
        "imgURL": "cust.png"
        },
        {
        "title": "Innovation",
        "description": "Embracing creativity, forward-thinking, and staying ahead.",
        "imgURL": "innovation.png"
        },
        {
        "title": "Collaboration",
        "description": "Promoting teamwork, fostering collaboration, and achieving mutual success.",
        "imgURL": "collab.png"
        },
        {
        "title": "Accountability",
        "description": "Taking responsibility, holding oneself and others accountable, and learning from mistakes.",
        "imgURL": "acc.png"
        },
        {
        "title": "Sustainability",
        "description": "Integrating sustainable practices, minimizing environmental impact, and promoting social responsibility.",
        "imgURL": "sustainability.png"
        },
        {
        "title": "Adaptability",
        "description": "Being flexible and adaptable to change in markets, customer needs, and industry trends.",
        "imgURL": "adapt.png"
        }
    ];


return (
    <div className='values'>
        <h2 className='container values_heading '>our root values</h2>
        <div className="values--container">
            {
                values_data.map((data, index) => (
                <div className="values--container__value" key={index}>
                    <img src={`images/${data.imgURL}`} alt="" />
                    <div className="values--container__value__details">
                        <h3 className='values--container__value__details_heading'>{data.title}</h3>
                        <p className='values--container__value__details_para'>
                            {data.description}
                        </p>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Values