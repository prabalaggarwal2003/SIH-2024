import React from 'react';
import './hero.css'; // For custom styles

const Hero = () => {
  return (
    <section className="hero">
   
   


   <div className='MAIN'>
      <div className="hero-content">
       
        <h1 className="hero-title">Understand the  <span className='spanElement'>Constitution</span> </h1>
        <p className="hero-subtitle">
            
        Learning the Constitution can be tricky, with all those big words and complicated rules. It’s easy to get confused or feel bored. But it doesn’t have to be that way!
        </p>
      </div>
     <img className='Image'  src="https://img.freepik.com/premium-vector/law-books-with-scale-justice-vector-illustration-advocacy-element-concept-design_929545-458.jpg?semt=ais_hybrid" alt="" />
      </div>
    

      <div className="hero-animation">
        {/* Placeholder for your animation (e.g. Lottie or custom SVG animations) */}
      </div>
      <h1 className='how'>How Does Our Website Help?
      </h1>
      <div className="Category">
   
   <div className="games">
   <img className='CatImage-1' src="https://cdn-icons-png.flaticon.com/512/686/686589.png" alt="" /> <br />
    <p> Tests users knowledge of legal subjects through fun and challenging Games <br /> which will maintain the interest and keep them motivated.
    </p>
   </div>
   <div className="quizes">
   <img className='CatImage-2' src="https://cdn.icon-icons.com/icons2/3176/PNG/512/android_test_mobile_phone_icon_193878.png
" alt="" /> <br />
    <p> After learning we can test user's memory using different  <br />difficulty level quizzes and helps them to recall faster.
    </p>
   </div>
   <div className="animations">
   <img className='CatImage-3' src="   https://static.thenounproject.com/png/2965948-200.png

" alt="" /> <br />
    <p> Engages users through interactive scenarios that demonstrate <br /> legal concepts and their real-world applications.
    </p>
   </div>
     
      </div>
      <div className='con'>
  
  
 
  

     </div>
    </section>
  


  );
};

export default Hero;