import { teamMembersThreeData } from "@/db/teamMembersThreeData"
import TeamCardTwo from "./teamCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const TeamesThree = () => {
    return (
        <section id="team" className="team-section-3 fix section-padding section-bg">
            <div className="line-shape">
                <img src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <img src="/img/team/mask-shape-2.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Nossa equipe</SectionTitle.SubTitle>
                        <SectionTitle.Title>Profissionais Especializados <br /> e Qualificados</SectionTitle.Title>
                    </SectionTitle>
                    <Link to="/team" className="theme-btn wow slideUp" data-delay=".5">
                        Ver toda equipe
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    {teamMembersThreeData.slice(0, 4).map((member) => (
                        <div
                            key={member.id}
                            className={`col-xl-3 col-lg-4 col-md-6 wow slideUp`}
                            data-delay={member.delay}
                        >
                            <TeamCardTwo member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TeamesThree