import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-teal-400">Henrique Leite - Resume</h1>

          <div className="mb-6">
            <p className="text-gray-300">647-641-8008 | hleite@uwo.ca</p>
            <p className="text-gray-300">
              <Link href="https://linkedin.com/in/henrique-leite-3251a4209/" className="text-teal-400 hover:underline">
                linkedin.com/in/henrique-leite-3251a4209/
              </Link>
              {" | "}
              <Link href="https://github.com/hAlcLeite" className="text-teal-400 hover:underline">
                github.com/hAlcLeite
              </Link>
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Education</h2>
            <div>
              <h3 className="font-bold">University of Western Ontario</h3>
              <p className="text-gray-300">
                Bachelor of Science, Honors Specialization in Computer Science (BSc) Co-op
              </p>
              <p className="text-gray-400">2023 - 2027</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Technical Skills</h2>
            <div>
              <p>
                <span className="font-bold">Languages and Frameworks:</span> Python, Java, C, SQL, JavaScript, React.js,
                R, VBA, Flask, MS Access, HTML/CSS
              </p>
              <p>
                <span className="font-bold">Developer Tools:</span> UNIX, Git, Figma, Hugging Face, VS code, Jira,
                Google Analytics, RESTful API
              </p>
              <p>
                <span className="font-bold">Interests:</span> American Football, Ancient History, Classic Rock,
                travelling, rugby, Mr.Olympiad Classic Division winner
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Experiences</h2>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">Scotiabank McLeod</h3>
                <p>Toronto, Canada</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Automation and Data Engineering intern</p>
                <p>May 2025 – August 2025</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  Automating compliance checks and onboarding workflows using VBA and Excel macros, reducing manual
                  processing time.
                </li>
                <li>
                  Developing Python-based web scraping tools to identify and qualify prospective client leads,
                  integrating external financial data into internal pipelines.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">Autumn</h3>
                <p>New York, USA</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Business Development Intern (Remote)</p>
                <p>May 2024 – August 2024</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  A company specializing in simplifying the management of loss and connecting individuals with services
                  related to death.
                </li>
                <li>
                  Conducted comprehensive market research, including TAM (Total Addressable Market), SAM (Serviceable
                  Addressable Market), and SOM (Serviceable Obtainable Market) analysis, to define and refine the
                  company's target audience and serviceable reach. Which resulted in the identification of a 15%
                  underserved market segment.
                </li>
                <li>
                  Assisted in developing financial models to support revenue strategy, providing data-driven insights to
                  inform business growth initiatives that projected a 20% revenue increase by implementing a tiered
                  subscription model.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Extracurriculars</h2>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">Ivey FinTech</h3>
                <p>London, Ontario</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Consulting Analyst</p>
                <p>October 2024 – April 2025</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  Canada's largest student-led fintech consulting club, advising companies ranging from $50M to over
                  $1B.
                </li>
                <li>
                  Conducted demographic research and competitive benchmarking for Venn (previously Vault), a fintech
                  startup, leading to a 15% increase in market share within targeted segments by identifying gaps in SME
                  digital banking solutions.
                </li>
                <li>
                  Assisted in creating growth strategies, focusing on multi-currency invoicing and low-FX corporate
                  cards, which projected a 12% adoption increase among SMEs in Canada. Venn raised $21 million in series
                  A funding.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">Western Algorithmic Trading Club</h3>
                <p>London, Ontario</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>SigTech Developer</p>
                <p>January 2024 – April 2024</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  Student organization in quantitative trading, leveraging programming, technical analysis, and
                  alternative data to empower members in developing predictive models and market insights
                </li>
                <li>
                  Developed a predictive model using Python and Reddit API, analyzing social media to forecast commodity
                  prices and managed data collection and processing, employing pre-trained NLP from Hugging Face for
                  sentiment analysis and enhancing market trend understanding. Achieved 57% accuracy rate in forecasting
                  commodity prices within a 3-day window.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">Projects</h2>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">VocalGuard</h3>
                <p>London, Ontario</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Project Manager / Western Cyber Society / Python, PyTorch, React.js, RESTful APIs</p>
                <p>September 2024 – March 2025</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  Full-stack AI-driven web application to detect AI-generated voice fraud using deep learning models
                </li>
                <li>
                  Implementing Random Forest architectures to analyze audio features like Mel spectrograms and LFCC for
                  high-accuracy classification. Achieved 87.34% accuracy on testing set. Won 1st place at TTE
                  competition
                </li>
                <li>
                  Building an intuitive web interface with React.js for real-time audio analysis and visualization.
                  Utilizing FastAPI.
                </li>
                <li>Managing end-to-end project development, security compliance, and stakeholder collaboration.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">LTC-Bus time</h3>
                <p>London, Ontario</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Team Lead / Western Dev Society / Python, PyTorch, Streamlit, RESTful APIs</p>
                <p>October 2024 – April 2025</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>
                  Led the development of an advanced bus arrival prediction system in collaboration with Dr. Yili Tang
                  and the Mobility Technology (MoTech) Group, serving London's transit system
                </li>
                <li>
                  Architected and implemented a sophisticated BiLSTM neural network model with 3 layers and 512 hidden
                  units, achieving improved prediction accuracy through bidirectional sequence processing
                </li>
                <li>
                  Engineered a comprehensive data pipeline integrating real-time bus telemetry, environmental factors,
                  and historical transit patterns using PyTorch and scikit-learn
                </li>
                <li>
                  Developed a responsive Streamlit dashboard with RESTful API integration, enabling real-time
                  visualization of bus movements and arrival predictions
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="font-bold">Black-Scholes Option Pricing Model Dashboard</h3>
                <p>London, Ontario</p>
              </div>
              <div className="flex justify-between text-gray-300">
                <p>Python, Streamlit, Yahoo Finance API, numpy, scipy, pandas</p>
                <p>September 2024</p>
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Implemented the Black-Scholes model to calculate and visualize Call and Put option prices.</li>
                <li>
                  Integrated real-time stock data via the Yahoo Finance API, allowing users to fetch and use livestock
                  prices dynamically.
                </li>
                <li>
                  Designed an interactive dashboard with adjustable parameters for volatility, strike price, and time to
                  maturity, facilitating real-time financial analysis.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
