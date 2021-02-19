# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The purpose of this project was to use node.js, inquirer and javascript OOP properties to take in input from a user about their employees, and generate a team profile webpage for them. It first takes in the details of the team manager and stores them in a Manager object (outlined by a manager class extending an employee class), then gives the user the option to either add an engineer or intern, or finish entering their team. If they choose to keep adding, it will store their information in a class reflecting the employee's role. Each employee object, after being created, is subsequently pushed to an array of employees, which upon on the user saying they are finished, is used to generate the web page.
  
## Table of Contents
  
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Installation

The installation of this project is as simple as having the files in this repository, and ensuring all the dependencies are installed by running the command ```npm i```
  
## Usage

the program can be run by typing either ```node index.js``` or ```npm start``` in the command line. [Walkthrough Video]()
  
## License
  
This project is licensed under [MIT](https://opensource.org/licenses/MIT)
  
## Contributing

Any contribution is welcome.
  
## Tests

As jest is installed as a dependency, you can test the fucntionality of the classes by running ```npm test```. To further test the functionalities, you can run the program and try varies ways of inputting and different numbers of employees to see how it eventuates.
  
## Questions
  
Any further questions can be directed to me via my [GitHub](https://github.com/TopGek99/), or [email](arowe890@gmail.com) if it is a more pressing matter.
