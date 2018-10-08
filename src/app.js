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
                Type: 'pen',
                Heading: 'Technical Skills'
            },
            Client: 'Client',
            Server: 'Server',
            Database: 'Database',
            Others: 'Others',
            TechSkillFooter: '* denotes learning'

        };
        this.isMobileScreen = this.getIsMobileScreen();
    }
    activate() {
        var promObj = this.getProfileDataByUrl();
        return promObj;
    }

    getProfileDataByUrl() {
        var currentUrl = window.location.href;
        var userName = '';
      
        if(currentUrl.indexOf("localhost") < 0) {
            var initialIndex = currentUrl.indexOf('//');
            var finalIndex = currentUrl.indexOf('.github.io');
            if(initialIndex && finalIndex) {
                userName = currentUrl.slice(initialIndex+1, finalIndex);
            }
        }

        var prmObj = new Promise((resolve, reject)=>{

            var path = './data' + userName + '/profile_data';
            var promObj1 = this.getPageData(path);

            promObj1.then((pageData) => {
                resolve(pageData);
            }).catch((error) => {
                path = './data/default/profile_data';

                this.getPageData(path).then((pageData)=>{
                    resolve(pageData);
                }).catch((errorMsg)=>{
                    reject(errorMsg);
                });
            });
          
        });
        return prmObj;
    }

    getPageData(_path) {
        var promObj = import('' + _path).then((module) => {
            this.pageData = module.profileData;
            return Promise.resolve(module.profileData);
        }, (error) => {
            return Promise.reject(error);
        });
        return promObj;
    }

    getIsMobileScreen() {
        var isMobileScreen = false;

        var width = $(window).width();
        var height = $(window).height();

        var allScreenSizeTypes = {
            EXTRA_SMALL: 480, //px
            SMALL: 768,
            MEDIUM: 992,
            LARGE: 1200,
            EXTRA_LARGE: 5000
        }

        if (width <= allScreenSizeTypes.EXTRA_SMALL) {
            isMobileScreen = true;
        }

        return isMobileScreen;
    }
}
