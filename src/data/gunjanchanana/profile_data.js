import profileImage from './images/gunjan_profile.jpg';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Oct 1, 2018',
    Name: 'Gunjan Chanana',
    Address: 'Front End Developer at Antares Systems Ltd, Bangalore, INDIA',

    Email: 'gc.chanana@gmail.com',
    ProfileLinkedIn: 'https://in.linkedin.com/in/gunjanchanana',
    ProfileTwitter: 'https://twitter.com/ChananaGunjan',
    ProfileGooglePlus: 'https://plus.google.com/u/0/+GunjanChanana',
    ProfileLinkedInTitle: 'gunjanchanana on LinkedIn',
    ProfileTwitterTitle: '@ChananaGunjan on Twitter',
    ProfileGooglePlusTitle: '+GunjanChanana on Google+',
    ProfileGmailTitle: 'email to gc.chanana@gmail.com',

    Summary: [{
        Content: 'A Front End developer with 3 years of experience working with Web technologies. '
    }, {
        Content: 'Focused and have abilities of learning things quickly'
    }],
    TechnicalSkills: [
        {
            Header: 'Client',
            Skills: ['HTML', 'CSS', 'JAVASCRIPT (ES6)', 'AngularJS (v1)', 'AureliaJS']
        },
        {
            Header: 'Server',
            Skills: ['Core Java']
        },
        {
            Header: 'Others',
            Skills: ['GIT*']
        }
    ],
    Education: [{
        Course: 'B.Tech(Computer Science)',
        Year: '2015',
        Institute: 'Manav Rachna College of Engineering',
        Address: 'Faridabad, Haryana, INDIA'
    },
    {
        Course: 'CLASS 12 (PCMC - Physics, Chemistry, Mathematics, Computers)',
        Year: '2011',
        Institute: 'Shri Krishna Pranami Public School',
        Address: 'Hansi, Haryana, INDIA'
    },
    {
        Course: 'CLASS 10',
        Year: '2009',
        Institute: 'S.D. Modern Public School',
        Address: 'Hansi, Haryana, INDIA'
    }],
    Others: {
        Gender: 'Female',
        MartialStatus: 'Unmarried',
        Languages: 'English, Hindi',
        DOB: 'Apr 15, 1994'
    }
}

export { profileData}
