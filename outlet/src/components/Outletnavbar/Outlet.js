import React ,{useState}from 'react'
import './Outlet.css'

const Outlet = () => {
    const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];

  
    const [activeCategory, setActiveCategory] = useState('All Categories');

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };
  return (
    <div className='outletnav'>
        <p>Outlet Management</p>
       
        <nav className="navbar">
            <ul className="nav-list">
                {categories.map((category,index) => (
                    <li
                        key={category}
                        className={`nav-item  nav${index} ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
              
            </ul>
        </nav>
       
    </div>
  )
}

export default Outlet