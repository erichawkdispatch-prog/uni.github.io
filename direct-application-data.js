// Universities where you can apply directly without professor pre-approval
// These universities have structured PhD programs with centralized admission

const directApplicationUniversities = {
    europe: {
        united_kingdom: [
            { name: "University of Oxford", program: "DPhil in Mathematics", url: "https://www.maths.ox.ac.uk", note: "Apply directly; supervisor assigned after admission" },
            { name: "University of Cambridge", program: "PhD in Mathematics", url: "https://www.maths.cam.ac.uk", note: "Apply to the department; supervisor found during year 1" },
            { name: "Imperial College London", program: "PhD in Mathematics", url: "https://www.imperial.ac.uk/mathematics", note: "Apply to the department; supervisor matching happens" },
            { name: "University of Warwick", program: "PhD in Mathematics", url: "https://warwick.ac.uk/fac/sci/maths", note: "Direct application to the Mathematics Institute" },
            { name: "University of Edinburgh", program: "PhD in Mathematics", url: "https://www.maths.ed.ac.uk", note: "Apply directly; supervisor allocated" },
            { name: "University of Bath", program: "PhD in Mathematical Sciences", url: "https://www.bath.ac.uk/departments/department-of-mathematical-sciences", note: "Direct PhD application" },
            { name: "University of St Andrews", program: "PhD in Mathematics", url: "https://www.st-andrews.ac.uk/maths", note: "Apply directly; supervisor arranged" },
            { name: "University of Leeds", program: "PhD in Mathematics", url: "https://www.leeds.ac.uk/maths", note: "Direct application" },
            { name: "Durham University", program: "PhD in Mathematical Sciences", url: "https://www.durham.ac.uk/departments/mathematical-sciences", note: "Direct application" }
        ],
        germany: [
            { name: "University of Bonn", program: "Bonn International Graduate School of Mathematics (BIGS)", url: "https://www.mathematics.uni-bonn.de", note: "Structured program — apply to the school, not a professor" },
            { name: "LMU Munich", program: "Munich Graduate School of Mathematics", url: "https://www.mathematik.lmu.de", note: "Apply to the graduate school" },
            { name: "TU Munich", program: "Graduate School of Mathematics", url: "https://www.ma.tum.de", note: "Structured admission" },
            { name: "University of Göttingen", program: "Göttingen Graduate School for Mathematics", url: "https://www.uni-goettingen.de/en/mathematics", note: "Structured program, no professor needed upfront" },
            { name: "Humboldt University of Berlin", program: "Berlin Mathematical School (BMS)", url: "https://www.math.hu-berlin.de", note: "Excellent — apply directly, no professor needed" },
            { name: "Freie Universität Berlin", program: "Berlin Mathematical School (BMS)", url: "https://www.mi.fu-berlin.de", note: "Same as above — joint program" },
            { name: "University of Münster", program: "Mathematics Münster Graduate School", url: "https://www.uni-muenster.de/MathematicsMuenster", note: "Apply directly" },
            { name: "University of Freiburg", program: "Graduate School of Mathematics", url: "https://www.math.uni-freiburg.de", note: "Structured program" },
            { name: "Heidelberg University", program: "Heidelberg Graduate School of Mathematics", url: "https://www.math.uni-heidelberg.de", note: "Apply directly" }
        ],
        netherlands: [
            { name: "University of Amsterdam", program: "PhD in Mathematics", url: "https://www.uva.nl/en/discipline/areas/mathematics/mathematics.html", note: "Apply to the research institute; supervisor arranged" },
            { name: "Leiden University", program: "PhD in Mathematics", url: "https://www.universiteitleiden.nl/en/science/mathematics", note: "Direct application to the institute" },
            { name: "Utrecht University", program: "PhD in Mathematics", url: "https://www.uu.nl/en/research/mathematics", note: "Apply to the department" },
            { name: "TU Delft", program: "PhD in Applied Mathematics", url: "https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics", note: "Apply directly" },
            { name: "TU Eindhoven", program: "PhD in Mathematics", url: "https://www.tue.nl/en/research/research-groups/mathematics", note: "Direct application" },
            { name: "University of Groningen", program: "PhD in Mathematics", url: "https://www.rug.nl/research/bernoulli", note: "Apply directly" },
            { name: "Radboud University", program: "PhD in Mathematics", url: "https://www.ru.nl/math", note: "Direct application" }
        ],
        france: [
            { name: "Sorbonne Université", program: "École Doctorale de Sciences Mathématiques", url: "https://www.sorbonne-universite.fr/en/departments/mathematics", note: "Apply to the doctoral school" },
            { name: "Université Paris-Saclay", program: "École Doctorale de Mathématiques", url: "https://www.math.u-psud.fr", note: "Apply to the graduate school" },
            { name: "Université Paris Cité", program: "Doctoral School in Mathematics", url: "https://math-info.u-paris.fr", note: "Direct application" },
            { name: "ENS Paris", program: "PhD in Mathematics", url: "https://www.math.ens.psl.eu", note: "Apply to the department" },
            { name: "Université Grenoble Alpes", program: "Doctoral School Mathématiques", url: "https://www.math.univ-grenoble-alpes.fr", note: "Structured application" },
            { name: "Aix-Marseille Université", program: "Doctoral School in Mathematics", url: "https://www.math.univ-amu.fr", note: "Apply directly" }
        ],
        switzerland: [
            { name: "ETH Zurich", program: "PhD in Mathematics", url: "https://math.ethz.ch", note: "Apply directly to the department; supervisor found later" },
            { name: "EPFL", program: "PhD in Mathematics", url: "https://www.epfl.ch/schools/sb/research/math", note: "Apply to the doctoral school" },
            { name: "University of Zurich", program: "PhD in Mathematics", url: "https://www.math.uzh.ch", note: "Apply directly" },
            { name: "University of Geneva", program: "PhD in Mathematics", url: "https://www.unige.ch/math", note: "Direct application" }
        ],
        denmark: [
            { name: "University of Copenhagen", program: "PhD in Mathematics", url: "https://www.math.ku.dk", note: "Apply to the graduate school" },
            { name: "Aarhus University", program: "PhD in Mathematics", url: "https://math.au.dk", note: "Direct application to the department" },
            { name: "Technical University of Denmark (DTU)", program: "PhD in Applied Mathematics", url: "https://www.dtu.dk/english/research/mathematics", note: "Apply directly" }
        ],
        sweden: [
            { name: "KTH Royal Institute of Technology", program: "PhD in Mathematics", url: "https://www.kth.se/en/math", note: "Apply directly — advertised positions" },
            { name: "Uppsala University", program: "PhD in Mathematics", url: "https://www.math.uu.se", note: "Apply to the department" },
            { name: "Stockholm University", program: "PhD in Mathematics", url: "https://www.su.se/matematik", note: "Direct application" },
            { name: "Lund University", program: "PhD in Mathematics", url: "https://www.maths.lu.se", note: "Apply directly" }
        ],
        norway: [
            { name: "University of Oslo", program: "PhD in Mathematics", url: "https://www.mn.uio.no/math", note: "Apply to advertised positions" },
            { name: "NTNU", program: "PhD in Mathematics", url: "https://www.ntnu.edu/math", note: "Apply directly" }
        ]
    },
    australia: [
        { name: "University of Melbourne", program: "PhD in Mathematics & Statistics", url: "https://ms.unimelb.edu.au", note: "Apply via Melbourne Graduate School of Science; supervisor arranged after admission" },
        { name: "Australian National University (ANU)", program: "PhD in Mathematics", url: "https://maths.anu.edu.au", note: "Apply via ANU Graduate Research; supervisor matching during application process" },
        { name: "University of Sydney", program: "PhD in Mathematics", url: "https://www.sydney.edu.au/science/schools/school-of-mathematics-and-statistics.html", note: "Apply via Sydney Graduate Research School; supervisor assigned" },
        { name: "University of New South Wales (UNSW)", program: "PhD in Mathematics", url: "https://www.unsw.edu.au/science/our-schools/maths", note: "Apply via UNSW Graduate Research School; direct application" },
        { name: "Monash University", program: "PhD in Mathematics", url: "https://www.monash.edu/science/schools/school-of-mathematics", note: "Apply via Monash Graduate Research; supervisor allocated" },
        { name: "University of Queensland", program: "PhD in Mathematics", url: "https://maths.uq.edu.au", note: "Apply via UQ Graduate School; supervisor arranged" },
        { name: "University of Adelaide", program: "PhD in Mathematics", url: "https://www.adelaide.edu.au/maths", note: "Apply via Adelaide Graduate Research School; direct application" },
        { name: "University of Western Australia", program: "PhD in Mathematics", url: "https://www.uwa.edu.au/science/schools/physics-mathematics-computing", note: "Apply via UWA Graduate Research School; supervisor found after" },
        { name: "University of Technology Sydney (UTS)", program: "PhD in Mathematics", url: "https://www.uts.edu.au/study/mathematics", note: "Apply directly to the graduate school" },
        { name: "University of Wollongong", program: "PhD in Mathematics", url: "https://www.uow.edu.au/science-medicine-health/schools-entities/mathematics/", note: "Apply via Graduate Research School" },
        { name: "Macquarie University", program: "PhD in Mathematics", url: "https://www.mq.edu.au/research/mathematics", note: "Apply via Macquarie Graduate Research Academy" },
        { name: "Queensland University of Technology (QUT)", program: "PhD in Mathematics", url: "https://www.qut.edu.au/study/mathematics", note: "Apply directly to the research school" },
        { name: "RMIT University", program: "PhD in Mathematics", url: "https://www.rmit.edu.au/study-with-us/mathematics", note: "Apply via RMIT School of Science" },
        { name: "University of Newcastle", program: "PhD in Mathematics", url: "https://www.newcastle.edu.au/research/mathematics", note: "Apply via Graduate Research" },
        { name: "Deakin University", program: "PhD in Mathematics", url: "https://www.deakin.edu.au/research/mathematics", note: "Apply via Deakin Graduate Research Academy" },
        { name: "Griffith University", program: "PhD in Mathematics", url: "https://www.griffith.edu.au/research/mathematics", note: "Apply directly to the university" },
        { name: "University of Tasmania", program: "PhD in Mathematics", url: "https://www.utas.edu.au/research/mathematics", note: "Apply via Graduate Research School" },
        { name: "James Cook University", program: "PhD in Mathematics", url: "https://www.jcu.edu.au/research/mathematics", note: "Apply directly" },
        { name: "Flinders University", program: "PhD in Mathematics", url: "https://www.flinders.edu.au/research/mathematics", note: "Apply via Flinders Graduate Research School" },
        { name: "La Trobe University", program: "PhD in Mathematics", url: "https://www.latrobe.edu.au/research/mathematics", note: "Apply directly to the university" },
        { name: "Curtin University", program: "PhD in Mathematics", url: "https://www.curtin.edu.au/research/mathematics", note: "Apply via Curtin Graduate Research School" },
        { name: "University of South Australia", program: "PhD in Mathematics", url: "https://www.unisa.edu.au/research/mathematics", note: "Apply via Graduate Research" },
        { name: "Western Sydney University", program: "PhD in Mathematics", url: "https://www.westernsydney.edu.au/research/mathematics", note: "Apply directly" }
    ],
    newzealand: [
        { name: "University of Auckland", program: "PhD in Mathematics", url: "https://www.auckland.ac.nz/en/science/study-science/maths.html", note: "Apply via University of Auckland Graduate Research; supervisor arranged" },
        { name: "University of Otago", program: "PhD in Mathematics & Statistics", url: "https://www.otago.ac.nz/mathematics-and-statistics", note: "Apply via Otago Graduate Research School; direct application" },
        { name: "Victoria University of Wellington", program: "PhD in Mathematics", url: "https://www.wgtn.ac.nz/sms", note: "Apply via Victoria Graduate School; supervisor matching done" },
        { name: "University of Canterbury", program: "PhD in Mathematics", url: "https://www.canterbury.ac.nz/study/academic-study/maths-and-statistics", note: "Apply via Canterbury Graduate Research School; direct application" },
        { name: "Massey University", program: "PhD in Mathematics", url: "https://www.massey.ac.nz/study/subjects/mathematics/", note: "Apply via Massey Graduate Research School; supervisor arranged" },
        { name: "University of Waikato", program: "PhD in Mathematics", url: "https://www.waikato.ac.nz/study/subjects/mathematics", note: "Apply via Waikato Graduate Research School; direct application" },
        { name: "Auckland University of Technology (AUT)", program: "PhD in Mathematics", url: "https://www.aut.ac.nz/study/mathematics", note: "Apply via AUT Graduate Research School; direct application" },
        { name: "Lincoln University", program: "PhD in Mathematics", url: "https://www.lincoln.ac.nz/research/mathematics", note: "Apply via Lincoln Graduate Research School" }
    ],
    canada: [
        { name: "University of Toronto", program: "PhD in Mathematics", url: "https://www.math.utoronto.ca", note: "Apply to the Department of Mathematics" },
        { name: "University of British Columbia", program: "PhD in Mathematics", url: "https://www.math.ubc.ca", note: "Apply to the Department of Mathematics" },
        { name: "McGill University", program: "PhD in Mathematics", url: "https://www.math.mcgill.ca", note: "Apply to the Department of Mathematics and Statistics" },
        { name: "University of Waterloo", program: "PhD in Mathematics", url: "https://uwaterloo.ca/math", note: "Apply to the Faculty of Mathematics" },
        { name: "University of Alberta", program: "PhD in Mathematics", url: "https://www.ualberta.ca/mathematical-and-statistical-sciences", note: "Apply to Mathematical and Statistical Sciences" },
        { name: "Université de Montréal", program: "PhD in Mathematics", url: "https://dms.umontreal.ca", note: "Apply to the Department of Mathematics and Statistics" },
        { name: "McMaster University", program: "PhD in Mathematics", url: "https://math.mcmaster.ca", note: "Apply to the Department of Mathematics and Statistics" },
        { name: "Queen's University", program: "PhD in Mathematics", url: "https://www.queensu.ca/mathstat", note: "Apply to the Department of Mathematics and Statistics" },
        { name: "Simon Fraser University", program: "PhD in Mathematics", url: "https://www.sfu.ca/math", note: "Apply to the Department of Mathematics" },
        { name: "University of Calgary", program: "PhD in Mathematics", url: "https://science.ucalgary.ca/mathematics-statistics", note: "Apply to the Department of Mathematics and Statistics" },
        { name: "University of Ottawa", program: "PhD in Mathematics", url: "https://www.uottawa.ca/faculty-science/mathematics-statistics", note: "Apply to the Department of Mathematics and Statistics" }
    ]
};

const directApplicationRegionNames = {
    europe: "Europe 🇪🇺",
    australia: "Australia 🇦🇺",
    newzealand: "New Zealand 🇳🇿",
    canada: "Canada 🇨🇦"
};

const directApplicationEuropeCountries = {
    united_kingdom: "United Kingdom 🇬🇧",
    germany: "Germany 🇩🇪",
    netherlands: "Netherlands 🇳🇱",
    france: "France 🇫🇷",
    switzerland: "Switzerland 🇨🇭",
    denmark: "Denmark 🇩🇰",
    sweden: "Sweden 🇸🇪",
    norway: "Norway 🇳🇴"
};
