import React from 'react'
import '../styles/Plans.css';
import plan from '../assets/plan.jpg';

const data = [
  { Plan: "General", Monthly: "Rs.2000/-",Quarterly:"Rs.5000/-",HalfYearly: "Rs.8000/-" ,Annual: "Rs.12000/-" },
  
  { Plan: "Personal", Monthly: "Rs.8000/-",Quarterly:"Rs.11000/-",HalfYearly:"Rs.15000/-", Annual: "Rs.30000/-" },
  
  
]

export default function plans() {
  return (
    <div className='about1'>
      <div className='about1Top' style={{backgroundImage:`url(${plan})`}}></div>
<div className='plans50'>
  <h1>PLANS</h1>

</div>

    <div className='plan'>
       <table>
              <tr>
                  <th>Plan</th>
                  <th>Monthly</th>
                  <th>Quarterly</th>
                  <th>HalfYearly</th>
                  <th>Annual</th>
              </tr>
              {data.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.Plan}</td>
                          <td>{val.Monthly}</td>
                          <td>{val.Quarterly}</td>
                          <td>{val.HalfYearly}</td>
                          <td>{val.Annual}</td>
                      </tr>
                  )
              })}
          </table>
    </div>
    </div>
  )
}
