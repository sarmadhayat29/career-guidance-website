// Career Data
const careerData = {
  engineering: {
    title: "Engineering",
    icon: "⚙️",
    description:
      "Engineering involves designing, building, and maintaining structures, machines, systems, and processes.",
    skills: ["Problem-solving", "Mathematics", "Physics", "Technical drawing", "Analytical thinking"],
    study: "Bachelor's degree in Engineering (4 years), followed by professional certification",
    jobs: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Chemical Engineer"],
    salary: "$65,000 - $120,000 per year",
  },
  medical: {
    title: "Medical & Healthcare",
    icon: "🏥",
    description: "Healthcare professionals diagnose, treat, and prevent illnesses and injuries.",
    skills: ["Biology", "Chemistry", "Communication", "Empathy", "Attention to detail"],
    study: "Bachelor's degree (4 years) + Medical school (4 years) + Residency (3-7 years)",
    jobs: ["Doctor", "Nurse", "Pharmacist", "Physical Therapist", "Medical Technician"],
    salary: "$50,000 - $200,000+ per year",
  },
  business: {
    title: "Business & Management",
    icon: "💼",
    description: "Business professionals manage organizations, make strategic decisions, and drive growth.",
    skills: ["Leadership", "Communication", "Strategic thinking", "Financial management", "Negotiation"],
    study: "Bachelor's degree in Business Administration (4 years), MBA optional",
    jobs: ["Business Manager", "Marketing Manager", "Financial Analyst", "HR Manager"],
    salary: "$55,000 - $150,000 per year",
  },
  it: {
    title: "IT & Computer Science",
    icon: "💻",
    description: "IT professionals develop software, manage systems, and solve technical problems.",
    skills: ["Programming", "Problem-solving", "Logical thinking", "Database management", "Cybersecurity"],
    study: "Bachelor's degree in Computer Science or IT (4 years)",
    jobs: ["Software Developer", "Data Analyst", "Network Engineer", "Cybersecurity Specialist"],
    salary: "$60,000 - $140,000 per year",
  },
  arts: {
    title: "Arts & Design",
    icon: "🎨",
    description: "Artists and designers create visual content and express ideas through various media.",
    skills: ["Creativity", "Visual design", "Communication", "Technical software skills", "Attention to detail"],
    study: "Bachelor's degree in Fine Arts or Design (4 years)",
    jobs: ["Graphic Designer", "UI/UX Designer", "Illustrator", "Art Director", "Animator"],
    salary: "$45,000 - $90,000 per year",
  },
  law: {
    title: "Law & Justice",
    icon: "⚖️",
    description: "Legal professionals uphold justice, represent clients, and interpret laws.",
    skills: ["Critical thinking", "Research", "Communication", "Negotiation", "Ethics"],
    study: "Bachelor's degree (4 years) + Law school (3 years) + Bar exam",
    jobs: ["Lawyer", "Judge", "Legal Advisor", "Paralegal", "Corporate Counsel"],
    salary: "$60,000 - $180,000+ per year",
  },
  psychology: {
    title: "Psychology",
    icon: "🧠",
    description: "Psychologists study human behavior and mental processes to help people improve their lives.",
    skills: ["Empathy", "Active listening", "Analysis", "Research", "Communication"],
    study: "Bachelor's degree (4 years) + Master's/PhD (2-6 years)",
    jobs: ["Clinical Psychologist", "Counselor", "School Psychologist", "Research Psychologist"],
    salary: "$50,000 - $100,000 per year",
  },
  media: {
    title: "Media & Communications",
    icon: "📺",
    description: "Media professionals create, distribute, and analyze content across various platforms.",
    skills: ["Writing", "Communication", "Creativity", "Digital media", "Public speaking"],
    study: "Bachelor's degree in Communications or Journalism (4 years)",
    jobs: ["Journalist", "Public Relations Specialist", "Content Creator", "Social Media Manager"],
    salary: "$45,000 - $95,000 per year",
  },
}

// Modal Functions
function openModal(careerId) {
  const career = careerData[careerId]
  const modal = document.getElementById("modal")
  const modalBody = document.getElementById("modal-body")

  modalBody.innerHTML = `
        <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${career.icon}</div>
        <h2 style="color: #667eea; margin-bottom: 1rem;">${career.title}</h2>
        <p style="margin-bottom: 1.5rem;">${career.description}</p>
        
        <h3 style="color: #333; margin-bottom: 0.5rem;">Key Skills:</h3>
        <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem;">
            ${career.skills.map((skill) => `<li>${skill}</li>`).join("")}
        </ul>
        
        <h3 style="color: #333; margin-bottom: 0.5rem;">Education Path:</h3>
        <p style="margin-bottom: 1.5rem;">${career.study}</p>
        
        <h3 style="color: #333; margin-bottom: 0.5rem;">Career Opportunities:</h3>
        <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem;">
            ${career.jobs.map((job) => `<li>${job}</li>`).join("")}
        </ul>
        
        <h3 style="color: #333; margin-bottom: 0.5rem;">Salary Range:</h3>
        <p><strong>${career.salary}</strong></p>
    `

  modal.style.display = "block"
}

function closeModal() {
  document.getElementById("modal").style.display = "none"
}

window.onclick = (event) => {
  const modal = document.getElementById("modal")
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// Quiz Data
const quizQuestions = [
  {
    question: "What type of activities do you enjoy most?",
    options: [
      { text: "Building and creating things", scores: { engineering: 3, it: 2 } },
      { text: "Helping and caring for others", scores: { medical: 3, psychology: 2 } },
      { text: "Organizing and planning", scores: { business: 3, law: 1 } },
      { text: "Expressing creativity", scores: { arts: 3, media: 2 } },
    ],
  },
  {
    question: "Which subject do you find most interesting?",
    options: [
      { text: "Math and Physics", scores: { engineering: 3, it: 2 } },
      { text: "Biology and Chemistry", scores: { medical: 3 } },
      { text: "Economics and History", scores: { business: 2, law: 2 } },
      { text: "Art and Literature", scores: { arts: 3, media: 2 } },
    ],
  },
  {
    question: "What's your ideal work environment?",
    options: [
      { text: "Laboratory or workshop", scores: { engineering: 3, medical: 1 } },
      { text: "Office with team collaboration", scores: { business: 3, it: 2 } },
      { text: "Studio or creative space", scores: { arts: 3, media: 2 } },
      { text: "Courtroom or meeting rooms", scores: { law: 3, business: 1 } },
    ],
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Using logic and technical analysis", scores: { engineering: 3, it: 3 } },
      { text: "Through research and evidence", scores: { medical: 2, law: 3 } },
      { text: "With creative and innovative ideas", scores: { arts: 3, media: 2 } },
      { text: "By understanding people's needs", scores: { psychology: 3, medical: 2 } },
    ],
  },
  {
    question: "What type of projects excite you?",
    options: [
      { text: "Designing systems or machines", scores: { engineering: 3, it: 2 } },
      { text: "Creating visual content", scores: { arts: 3, media: 2 } },
      { text: "Developing business strategies", scores: { business: 3 } },
      { text: "Researching human behavior", scores: { psychology: 3, medical: 1 } },
    ],
  },
  {
    question: "Which skill comes naturally to you?",
    options: [
      { text: "Technical and analytical thinking", scores: { engineering: 3, it: 3 } },
      { text: "Empathy and understanding others", scores: { psychology: 3, medical: 2 } },
      { text: "Leadership and management", scores: { business: 3, law: 1 } },
      { text: "Creative expression", scores: { arts: 3, media: 2 } },
    ],
  },
  {
    question: "What motivates you most in a career?",
    options: [
      { text: "Solving complex technical problems", scores: { engineering: 3, it: 3 } },
      { text: "Making a difference in people's lives", scores: { medical: 3, psychology: 3 } },
      { text: "Financial success and growth", scores: { business: 3 } },
      { text: "Creative freedom and expression", scores: { arts: 3, media: 2 } },
    ],
  },
  {
    question: "How do you handle stress?",
    options: [
      { text: "Break down problems systematically", scores: { engineering: 2, it: 2, law: 1 } },
      { text: "Stay calm and focus on helping others", scores: { medical: 3, psychology: 2 } },
      { text: "Take charge and make quick decisions", scores: { business: 3 } },
      { text: "Channel it into creative work", scores: { arts: 2, media: 2 } },
    ],
  },
  {
    question: "What's your communication style?",
    options: [
      { text: "Technical and precise", scores: { engineering: 3, it: 2 } },
      { text: "Empathetic and supportive", scores: { psychology: 3, medical: 2 } },
      { text: "Persuasive and confident", scores: { business: 3, law: 3 } },
      { text: "Creative and expressive", scores: { arts: 3, media: 3 } },
    ],
  },
  {
    question: "Which career achievement would make you proudest?",
    options: [
      { text: "Inventing something revolutionary", scores: { engineering: 3, it: 2 } },
      { text: "Saving lives or improving health", scores: { medical: 3 } },
      { text: "Building a successful company", scores: { business: 3 } },
      { text: "Creating impactful art", scores: { arts: 3, media: 2 } },
    ],
  },
  {
    question: "What's your approach to learning?",
    options: [
      { text: "Hands-on experimentation", scores: { engineering: 3, it: 2 } },
      { text: "Reading and research", scores: { law: 3, medical: 2 } },
      { text: "Visual and creative exploration", scores: { arts: 3, media: 2 } },
      { text: "Discussion and collaboration", scores: { business: 2, psychology: 2 } },
    ],
  },
  {
    question: "How do you work best?",
    options: [
      { text: "Independently with clear objectives", scores: { it: 3, arts: 2 } },
      { text: "In teams with shared goals", scores: { business: 3, medical: 2 } },
      { text: "With mentorship and guidance", scores: { law: 2, psychology: 2 } },
      { text: "With creative freedom", scores: { arts: 3, media: 3 } },
    ],
  },
  {
    question: "What type of impact do you want to make?",
    options: [
      { text: "Technological advancement", scores: { engineering: 3, it: 3 } },
      { text: "Improving health and wellbeing", scores: { medical: 3, psychology: 2 } },
      { text: "Economic and business growth", scores: { business: 3 } },
      { text: "Cultural and artistic influence", scores: { arts: 3, media: 3 } },
    ],
  },
  {
    question: "Which challenge excites you most?",
    options: [
      { text: "Optimizing complex systems", scores: { engineering: 3, it: 3 } },
      { text: "Understanding human behavior", scores: { psychology: 3, medical: 1 } },
      { text: "Navigating legal complexities", scores: { law: 3 } },
      { text: "Creating compelling narratives", scores: { media: 3, arts: 2 } },
    ],
  },
  {
    question: "What's your ideal work-life balance?",
    options: [
      { text: "Structured hours with clear boundaries", scores: { engineering: 2, it: 2 } },
      { text: "Flexible hours focused on outcomes", scores: { arts: 3, media: 2 } },
      { text: "Demanding but rewarding schedule", scores: { medical: 2, law: 2 } },
      { text: "Standard business hours with networking", scores: { business: 3 } },
    ],
  },
]

// Quiz State
let currentQuestion = 0
const scores = {
  engineering: 0,
  medical: 0,
  business: 0,
  it: 0,
  arts: 0,
  law: 0,
  psychology: 0,
  media: 0,
}
let selectedOption = null

// Initialize Quiz
function initQuiz() {
  if (!document.getElementById("quiz-content")) return

  document.getElementById("total-q").textContent = quizQuestions.length
  displayQuestion()
}

function displayQuestion() {
  const question = quizQuestions[currentQuestion]
  const quizContent = document.getElementById("quiz-content")

  quizContent.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options
                  .map(
                    (option, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        ${option.text}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `

  updateProgress()
  updateButtons()
}

function selectOption(index) {
  selectedOption = index

  const options = document.querySelectorAll(".option")
  options.forEach((opt, i) => {
    opt.classList.toggle("selected", i === index)
  })
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("Please select an option")
    return
  }

  // Add scores
  const question = quizQuestions[currentQuestion]
  const selectedAnswer = question.options[selectedOption]

  for (const career in selectedAnswer.scores) {
    scores[career] += selectedAnswer.scores[career]
  }

  selectedOption = null
  currentQuestion++

  if (currentQuestion < quizQuestions.length) {
    displayQuestion()
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--
    selectedOption = null
    displayQuestion()
  }
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  document.getElementById("progress").style.width = progress + "%"
  document.getElementById("current-q").textContent = currentQuestion + 1
}

function updateButtons() {
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const submitBtn = document.getElementById("submit-btn")

  prevBtn.style.display = currentQuestion > 0 ? "block" : "none"

  if (currentQuestion === quizQuestions.length - 1) {
    nextBtn.style.display = "none"
    submitBtn.style.display = "block"
  } else {
    nextBtn.style.display = "block"
    submitBtn.style.display = "none"
  }
}

function submitQuiz() {
  if (selectedOption === null) {
    alert("Please select an option")
    return
  }

  // Add final scores
  const question = quizQuestions[currentQuestion]
  const selectedAnswer = question.options[selectedOption]

  for (const career in selectedAnswer.scores) {
    scores[career] += selectedAnswer.scores[career]
  }

  // Save scores and redirect
  localStorage.setItem("quizScores", JSON.stringify(scores))
  window.location.href = "result.html"
}

// Display Results
function displayResults() {
  if (!document.getElementById("results-content")) return

  const savedScores = localStorage.getItem("quizScores")
  if (!savedScores) {
    window.location.href = "quiz.html"
    return
  }

  const scores = JSON.parse(savedScores)

  // Sort careers by score
  const sortedCareers = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)

  const resultsContent = document.getElementById("results-content")

  resultsContent.innerHTML = sortedCareers
    .map((career, index) => {
      const careerKey = career[0]
      const score = career[1]
      const careerInfo = careerData[careerKey]

      return `
            <div class="result-card">
                <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${careerInfo.icon}</div>
                <h2>#${index + 1} ${careerInfo.title}</h2>
                <p style="margin-bottom: 1rem;"><strong>Match Score: ${score} points</strong></p>
                <p style="margin-bottom: 1.5rem;">${careerInfo.description}</p>
                
                <h3>Key Skills Required:</h3>
                <ul style="margin-bottom: 1rem;">
                    ${careerInfo.skills.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
                
                <h3>Education Path:</h3>
                <p style="margin-bottom: 1rem;">${careerInfo.study}</p>
                
                <h3>Career Opportunities:</h3>
                <ul style="margin-bottom: 1rem;">
                    ${careerInfo.jobs.map((job) => `<li>${job}</li>`).join("")}
                </ul>
                
                <h3>Salary Range:</h3>
                <p><strong>${careerInfo.salary}</strong></p>
            </div>
        `
    })
    .join("")
}

// Contact Form
function handleSubmit(event) {
  event.preventDefault()

  const form = event.target
  const successMessage = document.getElementById("success-message")

  // Here you would normally send the form data to a server
  // For now, we'll just show a success message

  form.style.display = "none"
  successMessage.style.display = "block"

  setTimeout(() => {
    form.reset()
    form.style.display = "block"
    successMessage.style.display = "none"
  }, 3000)
}

// Initialize page-specific functions
window.onload = () => {
  initQuiz()
  displayResults()
}
