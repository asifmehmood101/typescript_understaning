class Department {
  //   private name: string;
  //   private id: string;
  private Employees: string[] = [];
  //! short syntax for init the variable
  constructor(private name: string, private readonly id: string) {
    // this.name = n;
    // this.id = id;
  }

  //? understanding "this" in classes
  describe(this: Department) {
    console.log('Department:' + this.id + ' ' + this.name);
  }

  addEmployees(name: string) {
    this.Employees.push(name);
  }

  showEmployeeDetail(this: Department) {
    console.log(this.Employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'Frontend');
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super('Accounting', id);
  }

  addReports(report: string) {
    this.reports.push(report);
  }

  showReports() {
    console.log(this.reports);
  }
}
const it = new ITDepartment('IT', ['Asif']);

it.describe();

// const AccountingCopy = { name: 'DUMMY', describe: Accounting.describe };

// AccountingCopy.describe();

it.addEmployees('asif');
it.addEmployees('Max');
it.showEmployeeDetail();
// console.log(Accounting.Employees);

const Accounting = new AccountingDepartment('Acc', []);

Accounting.addReports('funding');
Accounting.addReports('billing');
Accounting.addReports('profits');

Accounting.showReports();
