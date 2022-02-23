const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const { data } = require('browserslist')

const teamArray = []



const createManager = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                message: 'Enter Manager Name',
                name: 'managerName',
                
            },
            {
                type: 'input',
                message: 'Enter Manger employee id',
                name: 'managerId',

            },
            {
                type: 'input',
                message: 'Enter Manager e-mail address.',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'Enter Manager office number.',
                name: 'managerOffice',
            },

        ])
        .then((newManager) => {
            const { managerName, managerId, managerEmail, managerOffice } = newManager
            const manager = new Manager(managerName, managerId, managerEmail, managerOffice)
            teamArray.push(manager)
            createTeam()
        })
        
    }

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add additional team members?',
            choices: [
                'Yes, an engineer.',
                'Yes, an intern.',
                'No, my team is finished.'
            ],
            name: "teamSelection"
        }
        ])
            .then((addMemberChoice) => {
                switch (addMemberChoice.teamSelection) {
                    case 'Yes, an engineer.':
                        addEngineer()
                        break
                    case 'Yes, an intern.':
                        addIntern()
                        break
                    case 'No, my team is finished.':
                        console.log("You have created your team!")
                        console.log(teamArray)
                }

            })
}

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter employee id',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Enter e-mail address.',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter github profile.',
            name: 'engineerGithub',
        },
    ])
        .then((newEngineeer) => {
            const { engineerName, engineerId, engineerEmail, engineerGithub } = newEngineeer
            let engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
            teamArray.push(engineer)
            createTeam()
        })

}
function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Name',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter employee id',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Enter e-mail address.',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter school that intern attends.',
            name: 'internSchool',
        },
    ])
        .then((newIntern) => {
            const { internName, internId, internEamil, internSchool } = newIntern
            let intern = new Intern(internName, internId, internEamil, internSchool)
            teamArray.push(intern)
            createTeam()
        })

}

createManager()
