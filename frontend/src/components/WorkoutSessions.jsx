import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          No shortcuts. Just pure grind. Our top workout sessions are curated to test your discipline and dedication. These aren’t just workouts—they’re battles. Show up, push harder, and walk out stronger every single time.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         Ready to break boundaries? Our Featured Bootcamps offer high-intensity training sessions designed to sculpt your body, boost stamina, and build mental toughness.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build raw power and endurance through high-intensity strength circuits. Designed to improve muscle tone, stability, and explosive performance—thi
              s bootcamp pushes your physical limits like never before.
            </p>
          </div>
          <div>
            <h4> Fat Burn HIIT</h4>
            <p>
              Burn calories fast with high-intensity interval training. This bootcamp mixes cardio and strength moves to fire up your metabolism, 
              shred fat, and keep you sweating long after the session ends.
            </p>
          </div>
          <div>
            <h4>Mobility & Flexibility</h4>
            <p>
              Improve your range of motion and prevent injuries with focused stretching, posture correction, and controlled movements. Pe
              rfect for recovery days or enhancing overall athletic performance.
            </p>
          </div>
          <div>
            <h4>Combat Training</h4>
            <p>
             Get fit while learning self-defense with our boxing and kickboxing sessions. These dynamic workouts sharpen reflexes, 
             build endurance, and release stress—one punch at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
