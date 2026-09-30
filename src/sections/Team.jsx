const teamMembers = [
    {
        id: 1,
        name: "Olivia Bennett",
        role: "Senior Beauty Specialist",
        initials: "OB"
    },
    {
        id: 2,
        name: "Sophia Miller",
        role: "Hair & Makeup Artist",
        initials: "SM"
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Skin Care Specialist",
        initials: "EW"
    }
];

function Team() {
    return (
        <section className="team" id="team">

            <div className="team-heading">
                <span className="section-label">MEET THE TEAM</span>

                <h2>
                    The artists behind
                    <br />
                    <em>your confidence.</em>
                </h2>

                <p>
                    Our experienced specialists combine creativity,
                    expertise and personalized care to create an
                    experience designed around you.
                </p>
            </div>

            <div className="team-grid">

                {teamMembers.map((member) => (
                    <article className="team-card" key={member.id}>

                        <div className={`team-image team-image-${member.id}`}>
                            <span>{member.initials}</span>

                            <div className="team-overlay">
                                <p>View Profile</p>
                            </div>
                        </div>

                        <div className="team-info">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default Team;