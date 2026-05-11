// University data for PhD Mathematics Finder
// Comprehensive list of universities across Canada, Australia, New Zealand, and Europe

const universities = {
    "canada": [
        {
            "name": "University of Toronto",
            "location": "Toronto, Ontario",
            "url": "https://www.math.utoronto.ca",
            "note": "Offers PhD in Pure & Applied Mathematics"
        },
        {
            "name": "University of British Columbia",
            "location": "Vancouver, British Columbia",
            "url": "https://www.math.ubc.ca",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "McGill University",
            "location": "Montreal, Quebec",
            "url": "https://www.math.mcgill.ca",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Waterloo",
            "location": "Waterloo, Ontario",
            "url": "https://uwaterloo.ca/math",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Alberta",
            "location": "Edmonton, Alberta",
            "url": "https://www.ualberta.ca/mathematical-and-statistical-sciences",
            "note": "Offers PhD in Mathematical & Statistical Sciences"
        },
        {
            "name": "Université de Montréal",
            "location": "Montreal, Quebec",
            "url": "https://dms.umontreal.ca",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "McMaster University",
            "location": "Hamilton, Ontario",
            "url": "https://math.mcmaster.ca",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "Queen's University",
            "location": "Kingston, Ontario",
            "url": "https://www.queensu.ca/mathstat",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "Simon Fraser University",
            "location": "Burnaby, British Columbia",
            "url": "https://www.sfu.ca/math",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Calgary",
            "location": "Calgary, Alberta",
            "url": "https://science.ucalgary.ca/mathematics-statistics",
            "note": "Offers PhD in Mathematics & Statistics"
        }
    ],
    "australia": [
        {
            "name": "University of Melbourne",
            "location": "Melbourne, Victoria",
            "url": "https://ms.unimelb.edu.au",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "Australian National University",
            "location": "Canberra, ACT",
            "url": "https://maths.anu.edu.au",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Sydney",
            "location": "Sydney, New South Wales",
            "url": "https://www.sydney.edu.au/science/schools/school-of-mathematics-and-statistics.html",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "University of New South Wales",
            "location": "Sydney, New South Wales",
            "url": "https://www.unsw.edu.au/science/our-schools/maths",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "Monash University",
            "location": "Melbourne, Victoria",
            "url": "https://www.monash.edu/science/schools/school-of-mathematics",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Queensland",
            "location": "Brisbane, Queensland",
            "url": "https://maths.uq.edu.au",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Adelaide",
            "location": "Adelaide, South Australia",
            "url": "https://www.adelaide.edu.au/maths",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Western Australia",
            "location": "Perth, Western Australia",
            "url": "https://www.uwa.edu.au/science/schools/physics-mathematics-computing",
            "note": "Offers PhD in Mathematics"
        }
    ],
    "newzealand": [
        {
            "name": "University of Auckland",
            "location": "Auckland",
            "url": "https://www.auckland.ac.nz/en/science/study-science/maths.html",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Otago",
            "location": "Dunedin",
            "url": "https://www.otago.ac.nz/mathematics-and-statistics",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "Victoria University of Wellington",
            "location": "Wellington",
            "url": "https://www.wgtn.ac.nz/sms",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "University of Canterbury",
            "location": "Christchurch",
            "url": "https://www.canterbury.ac.nz/study/academic-study/maths-and-statistics",
            "note": "Offers PhD in Mathematics & Statistics"
        },
        {
            "name": "Massey University",
            "location": "Palmerston North",
            "url": "https://www.massey.ac.nz/study/subjects/mathematics/",
            "note": "Offers PhD in Mathematics"
        },
        {
            "name": "University of Waikato",
            "location": "Hamilton",
            "url": "https://www.waikato.ac.nz/study/subjects/mathematics",
            "note": "Offers PhD in Mathematics"
        }
    ],
    "europe": {
        "united_kingdom": [
            {
                "name": "University of Cambridge",
                "location": "Cambridge",
                "url": "https://www.maths.cam.ac.uk",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Oxford",
                "location": "Oxford",
                "url": "https://www.maths.ox.ac.uk",
                "note": "Offers DPhil in Mathematics"
            },
            {
                "name": "Imperial College London",
                "location": "London",
                "url": "https://www.imperial.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Edinburgh",
                "location": "Edinburgh",
                "url": "https://www.maths.ed.ac.uk",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Warwick",
                "location": "Coventry",
                "url": "https://warwick.ac.uk/fac/sci/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Manchester",
                "location": "Manchester",
                "url": "https://www.manchester.ac.uk/research/be-inspired/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Bristol",
                "location": "Bristol",
                "url": "https://www.bristol.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Glasgow",
                "location": "Glasgow",
                "url": "https://www.gla.ac.uk/schools/mathematicsstatistics",
                "note": "Offers PhD in Mathematics & Statistics"
            },
            {
                "name": "King's College London",
                "location": "London",
                "url": "https://www.kcl.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Birmingham",
                "location": "Birmingham",
                "url": "https://www.birmingham.ac.uk/schools/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Leeds",
                "location": "Leeds",
                "url": "https://www.leeds.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Sheffield",
                "location": "Sheffield",
                "url": "https://www.sheffield.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Nottingham",
                "location": "Nottingham",
                "url": "https://www.nottingham.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Southampton",
                "location": "Southampton",
                "url": "https://www.southampton.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of St Andrews",
                "location": "St Andrews",
                "url": "https://www.st-andrews.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Bath",
                "location": "Bath",
                "url": "https://www.bath.ac.uk/departments/department-of-mathematical-sciences",
                "note": "Offers PhD in Mathematical Sciences"
            },
            {
                "name": "University of York",
                "location": "York",
                "url": "https://www.york.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Durham University",
                "location": "Durham",
                "url": "https://www.durham.ac.uk/departments/mathematical-sciences",
                "note": "Offers PhD in Mathematical Sciences"
            },
            {
                "name": "University of Liverpool",
                "location": "Liverpool",
                "url": "https://www.liverpool.ac.uk/mathematical-sciences",
                "note": "Offers PhD in Mathematical Sciences"
            },
            {
                "name": "Queen Mary University of London",
                "location": "London",
                "url": "https://www.qmul.ac.uk/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Leicester",
                "location": "Leicester",
                "url": "https://le.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Cardiff University",
                "location": "Cardiff",
                "url": "https://www.cardiff.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Surrey",
                "location": "Surrey",
                "url": "https://www.surrey.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Loughborough University",
                "location": "Loughborough",
                "url": "https://www.lboro.ac.uk/departments/maths",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Aberdeen",
                "location": "Aberdeen",
                "url": "https://www.abdn.ac.uk/study/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Heriot-Watt University",
                "location": "Edinburgh",
                "url": "https://www.hw.ac.uk/departments/mathematics.htm",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Strathclyde",
                "location": "Glasgow",
                "url": "https://www.strath.ac.uk/science/mathematicsstatistics",
                "note": "Offers PhD in Mathematics & Statistics"
            },
            {
                "name": "University of Dundee",
                "location": "Dundee",
                "url": "https://www.dundee.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Reading",
                "location": "Reading",
                "url": "https://www.reading.ac.uk/mathematics-statistics",
                "note": "Offers PhD in Mathematics & Statistics"
            },
            {
                "name": "University of East Anglia",
                "location": "Norwich",
                "url": "https://www.uea.ac.uk/about/school-of-mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Swansea University",
                "location": "Swansea",
                "url": "https://www.swansea.ac.uk/mathematics",
                "note": "Offers PhD in Mathematics"
            }
        ],
        "germany": [
            {
                "name": "University of Bonn",
                "location": "Bonn",
                "url": "https://www.mathematics.uni-bonn.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "LMU Munich",
                "location": "Munich",
                "url": "https://www.mathematik.lmu.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Heidelberg University",
                "location": "Heidelberg",
                "url": "https://www.math.uni-heidelberg.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Technical University of Munich (TUM)",
                "location": "Munich",
                "url": "https://www.ma.tum.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Freie Universität Berlin",
                "location": "Berlin",
                "url": "https://www.mi.fu-berlin.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Humboldt University of Berlin",
                "location": "Berlin",
                "url": "https://www.math.hu-berlin.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Cologne",
                "location": "Cologne",
                "url": "https://www.math.uni-koeln.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Göttingen",
                "location": "Göttingen",
                "url": "https://www.uni-goettingen.de/en/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Hamburg",
                "location": "Hamburg",
                "url": "https://www.math.uni-hamburg.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Freiburg",
                "location": "Freiburg",
                "url": "https://www.math.uni-freiburg.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Tübingen",
                "location": "Tübingen",
                "url": "https://www.math.uni-tuebingen.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "RWTH Aachen University",
                "location": "Aachen",
                "url": "https://www.math.rwth-aachen.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Münster",
                "location": "Münster",
                "url": "https://www.uni-muenster.de/MathematicsMuenster",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Stuttgart",
                "location": "Stuttgart",
                "url": "https://www.mathematik.uni-stuttgart.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "Karlsruhe Institute of Technology (KIT)",
                "location": "Karlsruhe",
                "url": "https://www.math.kit.edu",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Mannheim",
                "location": "Mannheim",
                "url": "https://www.math.uni-mannheim.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Erlangen-Nuremberg",
                "location": "Erlangen",
                "url": "https://www.math.fau.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Duisburg-Essen",
                "location": "Essen",
                "url": "https://www.uni-due.de/mathematik",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "TU Darmstadt",
                "location": "Darmstadt",
                "url": "https://www.mathematik.tu-darmstadt.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Leipzig",
                "location": "Leipzig",
                "url": "https://www.math.uni-leipzig.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "TU Berlin",
                "location": "Berlin",
                "url": "https://www.math.tu-berlin.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Potsdam",
                "location": "Potsdam",
                "url": "https://www.math.uni-potsdam.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Bielefeld",
                "location": "Bielefeld",
                "url": "https://www.math.uni-bielefeld.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Bremen",
                "location": "Bremen",
                "url": "https://www.uni-bremen.de/en/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Konstanz",
                "location": "Konstanz",
                "url": "https://www.math.uni-konstanz.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Regensburg",
                "location": "Regensburg",
                "url": "https://www.uni-regensburg.de/mathematics",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Ulm",
                "location": "Ulm",
                "url": "https://www.uni-ulm.de/mawi",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Jena",
                "location": "Jena",
                "url": "https://www.math.uni-jena.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "TU Dortmund University",
                "location": "Dortmund",
                "url": "https://www.mathematik.tu-dortmund.de",
                "note": "Offers PhD in Mathematics"
            },
            {
                "name": "University of Kiel",
                "location": "Kiel",
                "url": "https://www.math.uni-kiel.de",
                "note": "Offers PhD in Mathematics"
            }
        ],
        "france": [
            { "name": "Université Paris-Saclay", "location": "Paris", "url": "https://www.math.u-psud.fr", "note": "Hadamard Doctoral School of Mathematics – EDMH" },
            { "name": "Sorbonne Université", "location": "Paris", "url": "https://www.sorbonne-universite.fr/en/departments/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "École Normale Supérieure (ENS Paris)", "location": "Paris", "url": "https://www.math.ens.psl.eu", "note": "Via PSL University" },
            { "name": "Institut Polytechnique de Paris", "location": "Paris", "url": "https://www.ip-paris.fr/en/education/phd", "note": "École Polytechnique / ENSTA" },
            { "name": "Université Paris Cité", "location": "Paris", "url": "https://math-info.u-paris.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université Sorbonne Paris Nord", "location": "Paris", "url": "https://www.math.univ-paris13.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université Claude Bernard Lyon 1", "location": "Lyon", "url": "https://math.univ-lyon1.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université de Bordeaux", "location": "Bordeaux", "url": "https://www.math.u-bordeaux.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université Paul Sabatier (Toulouse III)", "location": "Toulouse", "url": "https://www.math.univ-toulouse.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université de Strasbourg", "location": "Strasbourg", "url": "https://mathinfo.unistra.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université Grenoble Alpes", "location": "Grenoble", "url": "https://www.math.univ-grenoble-alpes.fr", "note": "Offers PhD in Mathematics" },
            { "name": "Université Côte d'Azur", "location": "Nice", "url": "https://math.univ-cotedazur.fr", "note": "Offers PhD in Mathematics" },
            { "name": "MINES Paris – PSL", "location": "Paris", "url": "https://www.minesparis.psl.eu", "note": "Numerical Mathematics track" },
            { "name": "Université de Tours", "location": "Tours", "url": "https://www.math.univ-tours.fr", "note": "Offers PhD in Mathematics" }
        ],
        "italy": [
            { "name": "Scuola Normale Superiore", "location": "Pisa", "url": "https://www.sns.it/en/science/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Sapienza University of Rome", "location": "Rome", "url": "https://www.mat.uniroma1.it", "note": "Offers PhD in Mathematics" },
            { "name": "University of Milan", "location": "Milan", "url": "https://www.mat.unimi.it", "note": "Offers PhD in Mathematics" },
            { "name": "Politecnico di Milano", "location": "Milan", "url": "https://www.mate.polimi.it", "note": "Offers PhD in Mathematics" },
            { "name": "University of Bologna", "location": "Bologna", "url": "https://www.unibo.it/en/teaching/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Padua", "location": "Padua", "url": "https://www.math.unipd.it", "note": "Offers PhD in Mathematics" },
            { "name": "University of Florence", "location": "Florence", "url": "https://www.math.unifi.it", "note": "Offers PhD in Mathematics" },
            { "name": "University of Turin", "location": "Turin", "url": "https://www.mathematics.unito.it", "note": "Offers PhD in Mathematics" },
            { "name": "Politecnico di Torino", "location": "Turin", "url": "https://www.polito.it/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Naples Federico II", "location": "Naples", "url": "https://www.mathematics.unina.it", "note": "Offers PhD in Mathematics" },
            { "name": "University of Pisa", "location": "Pisa", "url": "https://www.dm.unipi.it", "note": "Offers PhD in Mathematics" },
            { "name": "SISSA", "location": "Trieste", "url": "https://www.sissa.it/mathematics", "note": "International School for Advanced Studies" },
            { "name": "University of Rome Tor Vergata", "location": "Rome", "url": "https://www.mat.uniroma2.it", "note": "Offers PhD in Mathematics" }
        ],
        "spain": [
            { "name": "Autonomous University of Madrid", "location": "Madrid", "url": "https://www.uam.es/ciencias/matematicas", "note": "Offers PhD in Mathematics" },
            { "name": "Complutense University of Madrid", "location": "Madrid", "url": "https://www.ucm.es/matematicas", "note": "Offers PhD in Mathematics" },
            { "name": "University of Barcelona", "location": "Barcelona", "url": "https://www.ub.edu/portal/web/matematiques", "note": "Offers PhD in Mathematics" },
            { "name": "Autonomous University of Barcelona", "location": "Barcelona", "url": "https://www.uab.cat/matematiques", "note": "Offers PhD in Mathematics" },
            { "name": "University of the Basque Country", "location": "Bilbao", "url": "https://www.ehu.eus/en/web/zt-ztfmr/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Granada", "location": "Granada", "url": "https://www.ugr.es/~matematicas", "note": "Offers PhD in Mathematics" },
            { "name": "Polytechnic University of Catalonia", "location": "Barcelona", "url": "https://www.fme.upc.edu", "note": "Offers PhD in Mathematics" },
            { "name": "University of Seville", "location": "Seville", "url": "https://www.us.es/en/study/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Valencia", "location": "Valencia", "url": "https://www.uv.es/matematiques", "note": "Offers PhD in Mathematics" },
            { "name": "University of Santiago de Compostela", "location": "Santiago", "url": "https://www.usc.gal/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "switzerland": [
            { "name": "ETH Zurich", "location": "Zurich", "url": "https://math.ethz.ch", "note": "Swiss Federal Institute of Technology" },
            { "name": "EPFL", "location": "Lausanne", "url": "https://www.epfl.ch/schools/sb/research/math", "note": "École Polytechnique Fédérale de Lausanne" },
            { "name": "University of Zurich", "location": "Zurich", "url": "https://www.math.uzh.ch", "note": "Offers PhD in Mathematics" },
            { "name": "University of Bern", "location": "Bern", "url": "https://www.mathematik.unibe.ch", "note": "Offers PhD in Mathematics" },
            { "name": "University of Basel", "location": "Basel", "url": "https://mathematik.unibas.ch", "note": "Offers PhD in Mathematics" },
            { "name": "University of Geneva", "location": "Geneva", "url": "https://www.unige.ch/math", "note": "Offers PhD in Mathematics" }
        ],
        "netherlands": [
            { "name": "University of Amsterdam", "location": "Amsterdam", "url": "https://www.uva.nl/en/discipline/areas/mathematics/mathematics.html", "note": "Offers PhD in Mathematics" },
            { "name": "Utrecht University", "location": "Utrecht", "url": "https://www.uu.nl/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Leiden University", "location": "Leiden", "url": "https://www.universiteitleiden.nl/en/science/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "TU Delft", "location": "Delft", "url": "https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics", "note": "Delft University of Technology" },
            { "name": "TU Eindhoven", "location": "Eindhoven", "url": "https://www.tue.nl/en/research/research-groups/mathematics", "note": "Eindhoven University of Technology" },
            { "name": "Radboud University", "location": "Nijmegen", "url": "https://www.ru.nl/math", "note": "Offers PhD in Mathematics" },
            { "name": "University of Groningen", "location": "Groningen", "url": "https://www.rug.nl/research/bernoulli", "note": "Offers PhD in Mathematics" },
            { "name": "Vrije Universiteit Amsterdam", "location": "Amsterdam", "url": "https://www.vu.nl/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Tilburg University", "location": "Tilburg", "url": "https://www.tilburguniversity.edu/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Twente", "location": "Enschede", "url": "https://www.utwente.nl/en/ewi/macs", "note": "Offers PhD in Mathematics" }
        ],
        "sweden": [
            { "name": "Stockholm University", "location": "Stockholm", "url": "https://www.su.se/matematik", "note": "Offers PhD in Mathematics" },
            { "name": "KTH Royal Institute of Technology", "location": "Stockholm", "url": "https://www.kth.se/en/math", "note": "Offers PhD in Mathematics" },
            { "name": "Uppsala University", "location": "Uppsala", "url": "https://www.math.uu.se", "note": "Offers PhD in Mathematics" },
            { "name": "Lund University", "location": "Lund", "url": "https://www.maths.lu.se", "note": "Offers PhD in Mathematics" },
            { "name": "Chalmers University of Technology", "location": "Gothenburg", "url": "https://www.chalmers.se/en/departments/math", "note": "Offers PhD in Mathematics" },
            { "name": "Linköping University", "location": "Linköping", "url": "https://liu.se/en/organisation/liu/ima", "note": "Offers PhD in Mathematics" },
            { "name": "Umeå University", "location": "Umeå", "url": "https://www.umu.se/en/research/groups/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Gothenburg", "location": "Gothenburg", "url": "https://www.gu.se/en/mathematical-sciences", "note": "Offers PhD in Mathematics" }
        ],
        "austria": [
            { "name": "University of Vienna", "location": "Vienna", "url": "https://mathematik.univie.ac.at", "note": "Offers PhD in Mathematics" },
            { "name": "TU Wien", "location": "Vienna", "url": "https://www.tuwien.at/en/math", "note": "Vienna University of Technology" },
            { "name": "University of Graz", "location": "Graz", "url": "https://mathematik.uni-graz.at", "note": "Offers PhD in Mathematics" },
            { "name": "TU Graz", "location": "Graz", "url": "https://www.math.tugraz.at", "note": "Graz University of Technology" },
            { "name": "University of Innsbruck", "location": "Innsbruck", "url": "https://www.uibk.ac.at/mathematik", "note": "Offers PhD in Mathematics" },
            { "name": "Johannes Kepler University Linz", "location": "Linz", "url": "https://www.jku.at/en/department-of-mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Salzburg", "location": "Salzburg", "url": "https://www.plus.ac.at/mathematik", "note": "Offers PhD in Mathematics" }
        ],
        "belgium": [
            { "name": "KU Leuven", "location": "Leuven", "url": "https://www.kuleuven.be/wetenschappen/onderzoek/wiskunde", "note": "Offers PhD in Mathematics" },
            { "name": "Université Catholique de Louvain", "location": "Louvain-la-Neuve", "url": "https://uclouvain.be/en/research/mathematics", "note": "UCLouvain" },
            { "name": "Université Libre de Bruxelles", "location": "Brussels", "url": "https://www.ulb.be/en/mathematics", "note": "ULB" },
            { "name": "Ghent University", "location": "Ghent", "url": "https://www.ugent.be/we/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Vrije Universiteit Brussel", "location": "Brussels", "url": "https://www.vub.be/en/research/mathematics", "note": "VUB" },
            { "name": "University of Liège", "location": "Liège", "url": "https://www.uliege.be/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Antwerp", "location": "Antwerp", "url": "https://www.uantwerpen.be/en/research/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "poland": [
            { "name": "University of Warsaw", "location": "Warsaw", "url": "https://www.mimuw.edu.pl", "note": "Offers PhD in Mathematics" },
            { "name": "Jagiellonian University", "location": "Kraków", "url": "https://www.im.uj.edu.pl", "note": "Offers PhD in Mathematics" },
            { "name": "Warsaw University of Technology", "location": "Warsaw", "url": "https://www.mini.pw.edu.pl", "note": "Offers PhD in Mathematics" },
            { "name": "Adam Mickiewicz University", "location": "Poznań", "url": "https://www.amu.edu.pl/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Wrocław University of Science and Technology", "location": "Wrocław", "url": "https://www.pwr.edu.pl/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Wrocław", "location": "Wrocław", "url": "https://www.math.uni.wroc.pl", "note": "Offers PhD in Mathematics" },
            { "name": "AGH University of Science and Technology", "location": "Kraków", "url": "https://www.agh.edu.pl/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Gdańsk University of Technology", "location": "Gdańsk", "url": "https://www.pg.edu.pl/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Lodz University of Technology", "location": "Łódź", "url": "https://www.p.lodz.pl/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Nicolaus Copernicus University", "location": "Toruń", "url": "https://www.mat.umk.pl", "note": "Offers PhD in Mathematics" },
            { "name": "Silesian University of Technology", "location": "Gliwice", "url": "https://www.polsl.pl/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "portugal": [
            { "name": "University of Lisbon", "location": "Lisbon", "url": "https://ciencias.ulisboa.pt/en/mathematics", "note": "Universidade de Lisboa" },
            { "name": "University of Porto", "location": "Porto", "url": "https://www.fc.up.pt/en/matematica", "note": "Offers PhD in Mathematics" },
            { "name": "University of Aveiro", "location": "Aveiro", "url": "https://www.ua.pt/en/mathematics", "note": "DPMat-UA" },
            { "name": "University of Coimbra", "location": "Coimbra", "url": "https://www.uc.pt/en/fctuc/dmat", "note": "Offers PhD in Mathematics" },
            { "name": "NOVA University Lisbon", "location": "Lisbon", "url": "https://www.fct.unl.pt/en/departments/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Minho", "location": "Braga", "url": "https://www.uminho.pt/en/research/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "denmark": [
            { "name": "University of Copenhagen", "location": "Copenhagen", "url": "https://www.math.ku.dk", "note": "Offers PhD in Mathematics" },
            { "name": "Technical University of Denmark", "location": "Lyngby", "url": "https://www.dtu.dk/english/research/mathematics", "note": "DTU" },
            { "name": "Aarhus University", "location": "Aarhus", "url": "https://math.au.dk", "note": "Offers PhD in Mathematics" },
            { "name": "Aalborg University", "location": "Aalborg", "url": "https://www.math.aau.dk", "note": "Offers PhD in Mathematics" }
        ],
        "finland": [
            { "name": "University of Helsinki", "location": "Helsinki", "url": "https://www.helsinki.fi/en/faculty-of-science/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Aalto University", "location": "Espoo", "url": "https://www.aalto.fi/en/department-of-mathematics-and-systems-analysis", "note": "Offers PhD in Mathematics" },
            { "name": "University of Jyväskylä", "location": "Jyväskylä", "url": "https://www.jyu.fi/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Turku", "location": "Turku", "url": "https://www.utu.fi/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Tampere University", "location": "Tampere", "url": "https://www.tuni.fi/en/research/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "czech_republic": [
            { "name": "Charles University", "location": "Prague", "url": "https://www.mff.cuni.cz/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Czech Technical University", "location": "Prague", "url": "https://www.fjfi.cvut.cz/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Brno University of Technology", "location": "Brno", "url": "https://www.vutbr.cz/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Masaryk University", "location": "Brno", "url": "https://www.sci.muni.cz/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "slovakia": [
            { "name": "Comenius University", "location": "Bratislava", "url": "https://www.fmph.uniba.sk/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Slovak University of Technology", "location": "Bratislava", "url": "https://www.stuba.sk/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Žilina", "location": "Žilina", "url": "https://www.uniza.sk/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "greece": [
            { "name": "National and Kapodistrian University of Athens", "location": "Athens", "url": "https://www.math.uoa.gr", "note": "Offers PhD in Mathematics" },
            { "name": "Aristotle University of Thessaloniki", "location": "Thessaloniki", "url": "https://www.math.auth.gr", "note": "Offers PhD in Mathematics" },
            { "name": "National Technical University of Athens", "location": "Athens", "url": "https://www.math.ntua.gr", "note": "Offers PhD in Mathematics" },
            { "name": "University of Crete", "location": "Heraklion", "url": "https://www.math.uoc.gr", "note": "Offers PhD in Mathematics" },
            { "name": "University of Patras", "location": "Patras", "url": "https://www.math.upatras.gr", "note": "Offers PhD in Mathematics" }
        ],
        "hungary": [
            { "name": "Eötvös Loránd University", "location": "Budapest", "url": "https://www.math.elte.hu", "note": "ELTE Budapest" },
            { "name": "Budapest University of Technology and Economics", "location": "Budapest", "url": "https://www.math.bme.hu", "note": "BME" },
            { "name": "University of Debrecen", "location": "Debrecen", "url": "https://www.math.unideb.hu", "note": "Offers PhD in Mathematics" },
            { "name": "Alfréd Rényi Institute of Mathematics", "location": "Budapest", "url": "https://www.renyi.hu", "note": "Research doctorate" }
        ],
        "luxembourg": [
            { "name": "University of Luxembourg", "location": "Luxembourg City", "url": "https://www.uni.lu/research/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "slovenia": [
            { "name": "University of Ljubljana", "location": "Ljubljana", "url": "https://www.fmf.uni-lj.si/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Maribor", "location": "Maribor", "url": "https://www.fnm.um.si/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "latvia": [
            { "name": "University of Latvia", "location": "Riga", "url": "https://www.lu.lv/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "lithuania": [
            { "name": "Vilnius University", "location": "Vilnius", "url": "https://www.mif.vu.lt", "note": "Offers PhD in Mathematics" },
            { "name": "Kaunas University of Technology", "location": "Kaunas", "url": "https://www.ktu.edu/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "estonia": [
            { "name": "University of Tartu", "location": "Tartu", "url": "https://www.ut.ee/en/research/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "Tallinn University of Technology", "location": "Tallinn", "url": "https://www.taltech.ee/en/mathematics", "note": "TalTech" }
        ],
        "iceland": [
            { "name": "University of Iceland", "location": "Reykjavik", "url": "https://www.hi.is/en/mathematics", "note": "Offers PhD in Mathematics" }
        ],
        "norway": [
            { "name": "University of Oslo", "location": "Oslo", "url": "https://www.mn.uio.no/math", "note": "Offers PhD in Mathematics" },
            { "name": "Norwegian University of Science and Technology", "location": "Trondheim", "url": "https://www.ntnu.edu/math", "note": "NTNU" },
            { "name": "University of Bergen", "location": "Bergen", "url": "https://www.uib.no/en/math", "note": "Offers PhD in Mathematics" },
            { "name": "University of Tromsø", "location": "Tromsø", "url": "https://uit.no/research/mathematics", "note": "The Arctic University of Norway" },
            { "name": "University of Stavanger", "location": "Stavanger", "url": "https://www.uis.no/en/mathematics", "note": "Offers PhD in Mathematics" },
            { "name": "University of Agder", "location": "Kristiansand", "url": "https://www.uia.no/en/mathematics", "note": "Offers PhD in Mathematical Sciences" },
            { "name": "Norwegian University of Life Sciences", "location": "Ås", "url": "https://www.nmbu.no/en/research/mathematics", "note": "NMBU" }
        ]
    }
};

const countryNames = {
    canada: "Canada 🇨🇦",
    australia: "Australia 🇦🇺",
    newzealand: "New Zealand 🇳🇿",
    europe: "Europe 🇪🇺"
};

const europeanCountryNames = {
    "united_kingdom": "United Kingdom 🇬🇧",
    "germany": "Germany 🇩🇪",
    "france": "France 🇫🇷",
    "italy": "Italy 🇮🇹",
    "spain": "Spain 🇪🇸",
    "switzerland": "Switzerland 🇨🇭",
    "netherlands": "Netherlands 🇳🇱",
    "sweden": "Sweden 🇸🇪",
    "austria": "Austria 🇦🇹",
    "belgium": "Belgium 🇧🇪",
    "poland": "Poland 🇵🇱",
    "portugal": "Portugal 🇵🇹",
    "denmark": "Denmark 🇩🇰",
    "finland": "Finland 🇫🇮",
    "czech_republic": "Czech Republic 🇨🇿",
    "slovakia": "Slovakia 🇸🇰",
    "greece": "Greece 🇬🇷",
    "hungary": "Hungary 🇭🇺",
    "luxembourg": "Luxembourg 🇱🇺",
    "slovenia": "Slovenia 🇸🇮",
    "latvia": "Latvia 🇱🇻",
    "lithuania": "Lithuania 🇱🇹",
    "estonia": "Estonia 🇪🇪",
    "iceland": "Iceland 🇮🇸",
    "norway": "Norway 🇳🇴"
};
