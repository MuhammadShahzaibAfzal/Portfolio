const skillData = [
  {
    title: "Frontend",
    skills: [
      {
        title: "React",
        logo: "./react1.svg",
      },
      {
        title: "Next JS",
        logo: "./nextjs-2.svg",
      },
      {
        title: "Tailwind",
        logo: "./tailwindcss.svg",
      },
      {
        title: "Bootstrap",
        logo: "./bootstrap.svg",
      },
      {
        title: "Javascript",
        logo: "./logo-javascript.svg",
      },
      {
        title: "HTML",
        logo: "./html-1.svg",
      },
      {
        title: "CSS",
        logo: "./css-3.svg",
      },
      {
        title: "Saas",
        logo: "./sass.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        title: "NodeJS",
        logo: "./nodejs-icon.svg",
      },
      {
        title: "Express JS",
        logo: "./express.svg",
      },
      {
        title: "JWT",
        logo: "./jwt.svg",
      },
      {
        title: "NextAuth",
        logo: "./next-auth.webp",
      },
      {
        title: "Bcrypt",
        logo: "./bcrypt.svg",
      },
      {
        title: "Mongoose",
        logo: "./mongoose.svg",
      },
      {
        title: "Multer",
        logo: "./multer.webp",
      },
      {
        title: "NodeMailer",
        logo: "./nodemailer.webp",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        title: "MongoDB",
        logo: "./mongodb-icon.svg",
      },
      {
        title: "MySQL",
        logo: "./mysql-logo.webp",
      },
      {
        title: "PostgreSQL",
        logo: "./postgreSQL.svg",
      },
      {
        title: "Git",
        logo: "./git-scm-icon.svg",
      },
      {
        title: "Docker",
        logo: "./docker.svg",
      },
      {
        title: "Django",
        logo: "./django.svg",
      },
      {
        title: "ReactNative",
        logo: "./react1.svg",
      },
    ],
  },
];
const MySkills = () => {
  return (
    <div className=" myskills">
      <div className="container">
        <h1>My Skills</h1>
        <div className="cardsWrapper">
          {skillData.map((skill) => {
            return (
              <>
                <div className="card">
                  <h2>{skill.title}</h2>
                  <div>
                    {skill.skills.map((i) => {
                      return (
                        <div className="skillCard" key={i.title}>
                          <img src={i.logo} alt="React Logo" />
                          <p>{i.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
