import * as filterType from "../utils/constants"

interface IData {
  list: Array<string>
  label: string
}

const filterData: Array<IData> = []

filterData[filterType.SHOW_ACCESSIBLE] = {
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

filterData[filterType.SHOW_BENEFITS] = {
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

filterData[filterType.SHOW_COMMUTE] = {
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

filterData[filterType.SHOW_COMPANY] = {
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

filterData[filterType.SHOW_COMPANY_SIZE] = {
  label: "Company Size",
  list: [
    "1-10",
    "11-50",
    "51-100",
    "101-200",
    "201-500",
    "500-1,000",
    "1,000-5,000",
    "5,001-10,000",
    "10,000-50,000",
    "50,000-100,000",
    "More than 100,000",
  ],
}

filterData[filterType.SHOW_DRESS_CODE] = {
  label: "Dress Code",
  list: [
    "None",
    "Shorts or Jeans and T-shirts",
    "Jeans and T-shirts",
    "Business Casual",
    "Suits Required",
    "Suit and Tie Required",
  ],
}

filterData[filterType.SHOW_EDUCATION_REQUIRED] = {
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

filterData[filterType.SHOW_EMPLOYEE_TYPE] = {
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

filterData[filterType.SHOW_EXPERIENCE_LEVEL] = {
  label: "Experience Level",
  list: ["Intern", "Junior", "Senior"],
}

filterData[filterType.SHOW_INDUSTRY] = {
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

filterData[filterType.SHOW_INTERNAL_EXTERNAL] = {
  label: "Internal External",
  list: [
    "Interal Employee facing only",
    "External Customer facing only",
    "Mostly Internal Some External",
    "Some Internal Mostly External",
    "Half Internal Half External",
  ],
}

filterData[filterType.SHOW_METHODOLOGY] = {
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

filterData[filterType.SHOW_MOBILE] = {
  label: "Mobile",
  list: [
    "Web Only",
    "Mobile Only",
    "Responsive Design",
    "Mobile Only and Web Only",
    "Mobile Only and Responsive Design",
  ],
}

filterData[filterType.SHOW_PAYMENT] = {
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
    "$1,000+ per week",
    "$2,000+ per week",
    "$3,000+ per week",
    "$4,000+ per week",
    "$5,000+ per week",
    "$6,000+ per week",
    "$7,000+ per week",
    "$8,000+ per week",
    "$9,000+ per week",
    "$10,000+ per week",
    "$3,000+ per week",
    "$4,000+ per week",
    "$5,000+ per week",
    "$6,000+ per week",
    "$7,000+ per week",
    "$8,000+ per week",
    "$9,000+ per week",
    "$10,000+ per week",
    "$20,000+ per week",
    "$30,000+ per week",
    "$40,000+ per week",
    "$2,500+ per month",
    "$3,000+ per month",
    "$4,500+ per month",
    "$5,000+ per month",
    "$6,000+ per month",
    "$7,000+ per month",
    "$8,000+ per month",
    "$9,000+ per month",
    "$10,000+ per month",
    "$20,000+ per month",
    "$30,000+ per month",
    "$40,000+ per month",
    "$50,000+ per year",
    "$60,000+ per year",
    "$70,000+ per year",
    "$80,000+ per year",
    "$90,000+ per year",
    "$100,000+ per year",
    "$125,000+ per year",
    "$150,000+ per year",
    "$175,000+ per year",
    "$200,000+ per year",
    "$250,000+ per year",
    "$275,000+ per year",
    "$300,000+ per year",
    "$400,000+ per year",
    "$500,000+ per year",
  ],
}

filterData[filterType.SHOW_PETS_ALLOWED] = {
  label: "Pets Allowed",
  list: [
    "No pets allowed",
    "Dogs allowed",
    "Cats allowed",
    "Cats and Dogs allowed",
    "All pets allowed",
  ],
}

filterData[filterType.SHOW_SKILL] = {
  label: "Skill",
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

filterData[filterType.SHOW_WORKING_FROM_HOME] = {
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

export default filterData
