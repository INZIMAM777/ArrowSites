// CallToAction.jsx


export const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of satisfied customers today</p>
      <div className="cta-buttons">
        <NavLink className='navlink' to='/Cards'>
          <button className="primary-cta">Sign Up Now</button>
        </NavLink>
        <NavLink className='navlink' to='/Cards'>
         <button className="secondary-cta">Learn More</button>
        </NavLink>

        <button className="primary-cta">Sign Up Now</button>
        <button className="secondary-cta">Learn More</button>
      </div>
    </section>
  );
};

