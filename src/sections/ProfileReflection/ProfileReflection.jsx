import Icon from "../../components/Icon/Icon";
import { PROFILE, REFLECTIONS } from "../../data/portfolioData";
import "./ProfileReflection.css";

export default function ProfileReflection() {
  const initials = PROFILE.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <section>
      <div className="rule">PROJECT</div>
      <h2 className="sec">MY PORTFOLIO</h2>
      <p className="lead" style={{ maxWidth: "none", fontSize: 16 }}>
        This portfolio contains a collection of my activities, projects, and reflections throughout the semester. It showcases the lessons and skills I gained during the Prelim, Midterm, and Final periods, along with the challenges I encountered and how I worked to overcome them. It also provides a glimpse of my progress, learning experiences, and personal growth as an IT student.
      </p>

      <div className="about">
        <div className="card">
          <div className="photo">{PROFILE.photo ? <img src={PROFILE.photo} alt={PROFILE.name} /> : initials}</div>
          <div className="name">{PROFILE.name}<Icon name="check" size={18} /></div>
          <div className="role">{PROFILE.role}</div>
          <p className="bio">{PROFILE.bio}</p>
          <div className="lbl">ACTIVITIES DONE</div>
          {PROFILE.activities.map((a) => <span className="tag" key={a}>{a}</span>)}
          <div className="resp"><div className="lbl">RESPONSIBILITIES</div>{PROFILE.responsibilities}</div>
        </div>

        <div className="phil">
          <div className="lbl">PHILOSOPHY</div>
          <h3>Reflection</h3>
          <p>My experience at school has helped me develop both my technical knowledge and personal skills. Throughout the semester, I encountered different challenges that pushed me to learn, adapt, and improve. Each period gave me new experiences and lessons that contributed to my growth as an IT student.</p>
          <div className="refl">
            {REFLECTIONS.map(([title, body]) => (
              <div className="card" key={title}><Icon name="list" size={20} /><h4>{title}</h4><p>{body}</p></div>
            ))}
          </div>
          <div className="mile">
            <span><small>MIDTERM MILESTONE STATUS</small><b>100% Submission Milestones Completed</b></span>
            <Icon name="list" size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}
