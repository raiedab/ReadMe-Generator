// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === 'GNU General Public License'){
    return `[![${license} badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  else if (license === 'MIT License'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'BSD 2-Clause "Simplified" License'){
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if(license === "Boost Software License"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === 'Creative Commons Zero'){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  else if (license === 'Eclipse Public License'){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === 'GNU Affero General Public License'){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (license === 'GNU General Public License'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (license === 'GNU Lesser General Public License'){
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (license === 'Mozilla Public License'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license === 'Apache'){
//     return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   }
//   else if(license === 'GNU General Public License'){
//     return `[![${license} badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
//   }
//   else if (license === 'MIT License'){
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   }
//   else if (license === 'BSD 2-Clause "Simplified" License'){
//     return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
//   }
//   else if (license === 'BSD 3-Clause "New" or "Revised" License'){
//     return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
//   }
//   else if(license === "Boost Software License"){
//     return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
//   }
//   else if (license === 'Creative Commons Zero'){
//     return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
//   }
//   else if (license === 'Eclipse Public License'){
//     return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
//   }
//   else if (license === 'GNU Affero General Public License'){
//     return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
//   }
//   else if (license === 'GNU General Public License'){
//     return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
//   }
//   else if (license === 'GNU Lesser General Public License'){
//     return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
//   }
//   else if (license === 'Mozilla Public License'){
//     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
//   }
//   else{
//     return "";
//   }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license === 'Apache'){
//     return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   }
//   else if(license === 'GNU General Public License'){
//     return `[![${license} badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
//   }
//   else if (license === 'MIT License'){
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   }
//   else if (license === 'BSD 2-Clause "Simplified" License'){
//     return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
//   }
//   else if (license === 'BSD 3-Clause "New" or "Revised" License'){
//     return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
//   }
//   else if(license === "Boost Software License"){
//     return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
//   }
//   else if (license === 'Creative Commons Zero'){
//     return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
//   }
//   else if (license === 'Eclipse Public License'){
//     return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
//   }
//   else if (license === 'GNU Affero General Public License'){
//     return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
//   }
//   else if (license === 'GNU General Public License'){
//     return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
//   }
//   else if (license === 'GNU Lesser General Public License'){
//     return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
//   }
//   else if (license === 'Mozilla Public License'){
//     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
//   }
//   else{
//     return "";
//   }
// }

  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ${renderLicenseBadge(data.license)}

## Table of Contents
[Name](#name)
[Title](#title)
[Description](#description)
[Github](#github)
[Repository](#repository)
[Features](#features)
[commands](#commands)
[Dependencies](#dependencies)

## Name
${data.name}

## Title
${data.title}

# Description
${data.description}

## Github
${data.github}
  
## Repository
${data.repository}

## Features
${data.features}

## Commands
${data.commands}

## License
${data.license}

## Dependencies
${data.dependencies}


`;
}

module.exports = generateMarkdown;
