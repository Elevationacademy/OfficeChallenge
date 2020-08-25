//write your code here to make the tests pass

 class Document {
  constructor(EmployeeName) {
      this.EmployeeName = EmployeeName
  }
}

class Employee {
  constructor(name) {
    this.name = name
  }
  work(office){
    const documentsArr = [{
      doc1: 'Help'
    },{
      doc2: 'Help2'
    },{
      doc3: 'Help3'
    },{
      doc4: 'Help4'
    },{
      doc5: 'Help5'
    },{
      doc6: 'Help6'
    },{
      doc7: 'Help7'
    },{
      doc8: 'Help8'
    },{
      doc9: 'Help9'
    },{
      doc10: 'Help10'
    },]

    documentsArr.map((document) => office.documents.push(document))
  } 
}

class Manager { 
  constructor(name) {
    this.name = name
    this.employees = []
  }
  hireEmployee(name){
    this.employees.push({name})
  }
  askEmployeesToWork(office){
    this.employees.map((employee) =>  {
      const singleEmployee = new Employee(employee)

      singleEmployee.work(office)
    })
  }

}

class Cleaner {
  constructor(name){
    this.name = name
  }
  clean(){
    console.log('Clean')
  }
}

class Office {
  constructor(){
    this.documents = []
    this.managers = []
    this.cleaners = []
  }
  hireCleaner(name){
    this.cleaners.push({name})
  }
  hireManager(name){
    this.managers.push({name})
  }
  startWorkDay(){
    this.managers.map((manager) => {
      const singleManager = new Manager(manager)

      singleManager.askEmployeesToWork(this)
    })
    this.cleaners.map((cleaner) => {
      const singleCleaner = new Cleaner(cleaner)

      cleaner.clean()
    })
  }
}