
export class App {
  constructor() {
    //give print icon (with all expanded)

    this.pageLabels = {
      Summary: 'Summary',
      Experience: 'Experience',
      Education: 'Education',
      OtherDetails: 'Other Details',
      LastUpdatedOn: 'Last Updated On : ',
      TechSkillHeaderObj: {
        Type: 'tag',
        Heading: 'Technical Skills'
      },
      Client: 'Client',
      Server: 'Server',
      Database: 'Database',
      Others: 'Others',
      TechSkillFooter: '* denotes learning'

    };
  }
  activate() {
    //can fetch profile_data user path dynamically using location url
    var promObj = import('./data/prasankumarn/profile_data').then((module) => {
      this.pageData = module.profileData;
      return Promise.resolve(this.pageData);
    });
    return promObj;
  }
}
