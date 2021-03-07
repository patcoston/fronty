import * as showType from "../utils/constants"
import axios from "axios"

interface IData {
  label: string
  list: Array<string>
}
/*
const getTechStack = async (): Promise<IData> => {
  const response = await axios.get(
    `http://patcoston.com/portfolio/data/techstack.js`,
  )
  console.log(response.data)
  return response.data
}

const testAxios = async (): Promise<IData> => {
  const techStack = await getTechStack()
  console.log(techStack)
  return techStack
}

const test = testAxios()

console.log(test)
*/

const filterData: Array<IData> = []

/*
axios
  .get("http://patcoston.com/portfolio/data/techstack.json")
  .then(response => {
    console.log(response.data)
    filterData[showType.SHOW_FILTER_TECH_STACK] = response.data
  })
*/

filterData[showType.SHOW_FILTER_TECH_STACK] = {
  label: "Tech Stack",
  list: [
    "Angular JS 1.x",
    "Angular 2.x",
    "Angular 4.x",
    "Angular 5.x",
    "Angular 6.x",
    "Angular 7.x",
    "Angular 8.x",
    "Angular 9.x",
    "Backbone 1.x",
    "Bootstrap 1.x",
    "Bootstrap 2.x",
    "Bootstrap 3.x",
    "Bootstrap 4.x",
    "Bootstrap 5.x",
    "CSS1",
    "CSS2",
    "CSS3",
    "CSS4",
    "Handlebars 1.x",
    "Handlebars 2.x",
    "Handlebars 3.x",
    "Handlebars 4.x",
    "Handlebars 5.x Beta",
    "HTML 3.x",
    "HTML 4.x",
    "HTML5",
    "JavaScript ES5 ECMAScript 5 2009",
    "JavaScript ES6 ECMAScript 2015",
    "JavaScript ES7 ECMAScript 2016",
    "JavaScript ES8 ECMAScript 2017",
    "JavaScript ES9 ECMAScript 2018",
    "JavaScript ES10 ECMAScript 2019",
    "JavaScript ES11 ECMAScript 2020",
    "JavaScript ES12 ECMAScript 2021",
    "Jenkins 1.x",
    "Jenkins 2.x",
    "jQuery 1.x",
    "jQuery 2.x",
    "jQuery 3.x",
    "Less.js 1.x",
    "Less.js 2.x",
    "Less.js 3.x",
    "Less.js 4.x",
    "React 15.x",
    "React 16.x",
    "React 17.x",
    "Redux 1.x",
    "Redux 2.x",
    "Redux 3.x",
    "Redux 4.x",
    "SASS 1.x",
    "SASS 2.x",
    "SASS 3.x",
    "SASS 4.x",
    "SASS 5.x",
    "Vue 0.x",
    "Vue 1.x",
    "Vue 2.x",
    "Vue 3.x",
    "Vuex 1.x",
    "Vuex 2.x",
    "Vuex 3.x",
  ],
}

filterData[showType.SHOW_FILTER_WORKING_FROM_HOME] = {
  label: "Working From Home",
  list: [
    "0% Never",
    "10%",
    "20%",
    "25%",
    "30%",
    "40%",
    "50%",
    "75%",
    "80%",
    "90%",
    "100% Always",
  ],
}

filterData[showType.SHOW_FILTER_PAYMENT] = {
  label: "Payment",
  list: [
    "$20+ per hour",
    "$30+ per hour",
    "$40+ per hour",
    "$50+ per hour",
    "$60+ per hour",
    "$70+ per hour",
    "$80+ per hour",
    "$90+ per hour",
    "$100+ per hour",
    "$125+ per hour",
    "$150+ per hour",
    "$175+ per hour",
    "$200+ per hour",
    "$250+ per hour",
    "$500+ per week",
    "$750+ per week",
    "$1k+ per week",
    "$2k+ per week",
    "$3k+ per week",
    "$4k+ per week",
    "$5k+ per week",
    "$6k+ per week",
    "$7k+ per week",
    "$8k+ per week",
    "$9k+ per week",
    "$10k+ per week",
    "$20k+ per week",
    "$30k+ per week",
    "$40k+ per week",
    "$2k+ per month",
    "$3k+ per month",
    "$4k+ per month",
    "$5k+ per month",
    "$6k+ per month",
    "$7k+ per month",
    "$8k+ per month",
    "$9k+ per month",
    "$10k+ per month",
    "$20k+ per month",
    "$30k+ per month",
    "$40k+ per month",
    "$50k+ per year",
    "$60k+ per year",
    "$70k+ per year",
    "$80k+ per year",
    "$90k+ per year",
    "$100k+ per year",
    "$125k+ per year",
    "$150k+ per year",
    "$175k+ per year",
    "$200k+ per year",
    "$250k+ per year",
    "$275k+ per year",
    "$300k+ per year",
    "$400k+ per year",
    "$500k+ per year",
  ],
}

filterData[showType.SHOW_FILTER_BENEFITS] = {
  label: "Benefits",
  list: [
    "401K Matching",
    "Paid Vacations",
    "Paid Sick Days",
    "Paid Holidays",
    "Paid Personal Days",
    "Paid Maternity Leave (Female)",
    "Paid Maternity Leave (Male)",
    "Free Soda",
    "Free Snacks",
    "Free Gym",
    "Personal Parking Space",
    "Private Office",
    "Free Swag",
    "Discounts",
  ],
}

filterData[showType.SHOW_FILTER_COMMUTE] = {
  label: "Commute",
  list: [
    "5 miles max",
    "10 miles max",
    "15 miles max",
    "20 miles max",
    "25 miles max",
    "50 miles max",
    "75 miles max",
    "100 miles max",
    "5 minutes max",
    "10 minutes max",
    "15 minutes max",
    "20 minutes max",
    "30 minutes max",
    "60 minutes max",
    "120 minutes max",
  ],
}

filterData[showType.SHOW_FILTER_COMPANY] = {
  label: "Popular Company",
  list: [
    "ADP",
    "Adobe",
    "Airbnb",
    "Amazon",
    "Apple",
    "Bank of America",
    "Box Internet",
    "CDW",
    "Capital One",
    "Cisco",
    "Citi",
    "Coinbase",
    "Comcast",
    "Dell",
    "Deloitte",
    "Discover",
    "DocuSign",
    "Dropbox",
    "EY",
    "Facebook",
    "GE",
    "Github",
    "Goldman Sachs",
    "Google",
    "Intel",
    "JPMorgan Chase & Co.",
    "Johnson & Johnson",
    "LinkedIn",
    "Lyft",
    "McKinsey & Company",
    "Microsoft",
    "NVIDIA",
    "Netflix",
    "Nike",
    "Oracle",
    "PayPal",
    "Pinterest",
    "PwC",
    "REI",
    "Rubric",
    "SAP Computer Software",
    "Salesforce",
    "ServiceNow",
    "Slack",
    "Snowflake",
    "SpaceX",
    "Splunk",
    "Spotify",
    "Tesla",
    "The We Company",
    "Twitter",
    "Uber",
    "Verizon",
    "Walt Disney Company",
    "Wells Fargo",
    "Workday",
  ],
}

filterData[showType.SHOW_FILTER_COMPANY_SIZE] = {
  label: "Company Size",
  list: [
    "1-10",
    "11-50",
    "51-100",
    "101-200",
    "201-500",
    "500-1k",
    "1k-5k",
    "5k-10k",
    "10k-50k",
    "500k-100k",
    "More than 100k",
  ],
}

filterData[showType.SHOW_FILTER_EDUCATION_REQUIRED] = {
  label: "Education Required",
  list: [
    "High School Equivalency",
    "High School Diploma",
    "Boot-Camp (less than 1 year)",
    "Tech-School (1+ years)",
    "Associates Degree (2 years)",
    "Bachelor of Science (4 years)",
    "Masters Degree (5-6 years)",
    "Phd",
    "Post-Doc",
  ],
}

filterData[showType.SHOW_FILTER_EMPLOYEE_TYPE] = {
  label: "Employee Type",
  list: [
    "Full-Time",
    "Part-Time",
    "Contract Independent",
    "Contract W2",
    "Contract to Hire Independent",
    "Contract to Hire W2",
    "Third Party",
    "Internship",
    "Temporary",
  ],
}

filterData[showType.SHOW_FILTER_EXPERIENCE_LEVEL] = {
  label: "Experience Level",
  list: ["Intern", "Junior", "Senior"],
}

filterData[showType.SHOW_FILTER_INDUSTRY] = {
  label: "Industry",
  list: [
    "Education",
    "Finance",
    "Banking",
    "Arts",
    "Entertainment",
    "Recreation",
    "Accounting",
    "Legal",
    "Aerospace",
    "Defense",
    "Agriculture",
    "Forestry",
    "Retail",
    "Transportation",
    "Construction",
    "Repair",
    "Maintenance",
    "Manufacturing",
    "Healthcare",
    "Information Technology",
    "Business Services",
    "Restaurants",
    "Bars",
    "Food Services",
    "Medical",
    "Government",
    "Museum",
    "Insurance",
    "Adult",
  ],
}

filterData[showType.SHOW_FILTER_INTERNAL_EXTERNAL] = {
  label: "Internal External",
  list: [
    "Interal Employee facing only",
    "External Customer facing only",
    "Mostly Internal Some External",
    "Some Internal Mostly External",
    "Half Internal Half External",
  ],
}

filterData[showType.SHOW_FILTER_METHODOLOGY] = {
  label: "Methodology",
  list: [
    "Waterfall",
    "Agile",
    "Scrum",
    "Kanban",
    "Lean",
    "Six Sigma",
    "PMI/PMBok",
  ],
}

filterData[showType.SHOW_FILTER_MOBILE] = {
  label: "Mobile",
  list: [
    "Web Only",
    "Mobile Only",
    "Responsive Design",
    "Mobile Only and Web Only",
    "Mobile Only and Responsive Design",
  ],
}

filterData[showType.SHOW_FILTER_ACCESSIBLE] = {
  label: "Accessibility",
  list: [
    "No compliance",
    "25% ADA Compliant",
    "50% ADA Compliant",
    "75% ADA Compliant",
    "100% ADA Compliant",
    "25% WCAG Compliant",
    "50% WCAG Compliant",
    "75% WCAG Compliant",
    "100% WCAG Compliant",
  ],
}

filterData[showType.SHOW_FILTER_PETS_ALLOWED] = {
  label: "Pets Allowed",
  list: [
    "No pets allowed",
    "Dogs allowed",
    "Cats allowed",
    "Cats and Dogs allowed",
    "All pets allowed",
  ],
}

filterData[showType.SHOW_FILTER_DRESS_CODE] = {
  label: "Dress Code",
  list: [
    "No dress code",
    "Shorts or Jeans and T-shirts",
    "Jeans and T-shirts",
    "Business Casual",
    "Suits Required",
    "Suit and Tie Required",
  ],
}

export default filterData
