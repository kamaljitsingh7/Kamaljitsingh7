
export class App {
  constructor() {
    //give print icon (with all expanded)

    this.pageLabels = {
      Summary: 'Summary',
      Experience: 'Experience',
      Education: 'Education',
      Others: 'Other Details',
      TechSkillHeaderObj: {
        Type: 'tag',
        Heading:'Technical Skills'
      }
    }
  }
  activate() {
//can fetch profile_data user path dynamically using location url
   var promObj =  import('./data/prasankumarn/profile_data').then((module) => {
      this.pageData = module.profileData;
      return Promise.resolve(this.pageData);
    });
   return promObj;
  }
}
