import pdfMake from "pdfmake/build/pdfmake.min";
import experiences from "@/assets/data/experiences.json";
import educations from "@/assets/data/educations.json";
import projects from "@/assets/data/projects.json";
import skills from "@/assets/data/skills.json";
import interests from "@/assets/data/interests.json";
import personalStatement from "@/assets/data/personal-statement.json";

pdfMake.fonts = {
  Inter: {
    normal: window.location.origin + "/fonts/Spectral-Regular.ttf",
    bold: window.location.origin + "/fonts/Spectral-Bold.ttf",
  },
};

const getBase64FromUrl = async (img) => {
  const canvas = document.createElement("canvas");
  // Set width and height
  canvas.width = 100;
  canvas.height = 100;
  let ctx = canvas.getContext("2d");

  // background color
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  // cropping
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(img, 0, 0, 100, 100);

  ctx.restore();

  return canvas.toDataURL("image/jpeg");
};

function getSectionLabel(text) {
  return { text, style: ["textBlue", "bold"], margin: [0, 0, 0, 5] };
}

function generateTable(body) {
  return {
    table: {
      widths: [150, "*"],
      body,
    },
    layout: "noBorders",
  };
}

const generatedExperiences = experiences.map((experience) => {
  return [
    experience.date,
    {
      stack: [
        { text: experience.position, style: ["bold"] },
        { text: experience.company, margin: [0, 0, 0, 5] },
        {
          ul: experience.jobs,
        },
        "\n",
      ],
    },
  ];
});
const generatedExperienceTable = generateTable(generatedExperiences);

const generatedEducations = educations.map((education) => {
  return [
    education.date,
    {
      stack: [{ text: education.major, style: ["bold"] }, education.place],
    },
  ];
});
const generatedEducationTable = generateTable(generatedEducations);

const generatedProjects = projects.map((project) => {
  return [
    project.date,
    {
      stack: [
        { text: project.name, style: ["bold"], margin: [0, 0, 0, 5] },
        project.description,
        "\n",
      ],
    },
  ];
});
const generatedProjectTable = generateTable(generatedProjects);

const generatedSkills = skills
  .filter((x) => x.showOnCV)
  .map((skill) => {
    return ["", { ul: [skill.label] }];
  });
const generatedSkillTable = generateTable(generatedSkills);

const generatedInterests = interests.map((interest) => {
  return ["", { ul: [interest] }];
});
const generatedInterestTable = generateTable(generatedInterests);

const generatedPersonalStatement = [["", personalStatement.text]];
const generatedPersonalStatementTable = generateTable(
  generatedPersonalStatement
);

var dd = {
  content: [
    {
      table: {
        widths: ["*", 60],
        body: [
          [
            {
              stack: [
                {
                  text: "Nurul Uhkrowi",
                  style: "header",
                  margin: [0, 0, 0, 3],
                },
                // "\n",
                {
                  text: "t.me/uhkrowi | uhkrowi@gmail.com | uhkrowi.github.io",
                  // margin: [0, 0, 0, 3],
                },
                // "uhkrowi.github.io",
              ],
            },
            {
              image: "profile",
              width: 60,
            },
          ],
        ],
      },
      layout: "noBorders",
    },
    // "\n",
    getSectionLabel("WORK EXPERIENCE"),
    generatedExperienceTable,
    // { text: "", pageBreak: "before" },
    getSectionLabel("EDUCATION"),
    generatedEducationTable,
    getSectionLabel("SKILL"),
    generatedSkillTable,
    "\n",
    getSectionLabel("INTEREST"),
    generatedInterestTable,
    "\n",
    getSectionLabel("PERSONAL STATEMENT"),
    generatedPersonalStatementTable,
    "\n",
    getSectionLabel("PROJECT"),
    generatedProjectTable,
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
    },
    small: {
      fontSize: 10,
    },
    bold: {
      bold: true,
    },
    textBlue: {
      color: "#3576ba",
    },
  },
  defaultStyle: {
    fontSize: 10,
    font: "Inter",
  },
  images: {
    profile: "",
  },
};

async function downloadCV() {
  const profileImg = new Image();
  profileImg.src = "/images/profile.jpg";

  profileImg.onload = async () => {
    dd.images.profile = await getBase64FromUrl(profileImg);
    pdfMake.createPdf(dd).download("CV - Nurul Uhkrowi - Web Developer");
  };
}

export default downloadCV;
