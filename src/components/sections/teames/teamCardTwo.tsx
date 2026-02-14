import { TeamMemberDataType } from "@/db/teamMembersOneData"
import { Link } from "react-router-dom"

const TeamCardTwo = ({ member }: { member: TeamMemberDataType }) => {
    return (
        <div className="single-team-items">
            <div className="team-image">
                <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=1a1a1a&color=FFD700`;
                    }}
                />
                <div className="social-profile">
                    <ul>
                        {
                            member.socialLinks.map(({icon, link}) => (
                                <li key={icon}>
                                    <Link to={link}>
                                        <i className={icon} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                    </span>
                </div>
            </div>
            <div className="team-content text-center">
                <h3>
                    <Link to="/team-details">{member.name}</Link>
                </h3>
                <p>{member.role}</p>
            </div>
        </div>
    )
}

export default TeamCardTwo