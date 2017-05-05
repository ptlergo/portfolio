/**
 * @ngdoc method
 * @name worksService
 * @methodOf module.worksService
 * @description
 * Works Page service with case studies
 *
 * @returns {}
 */
function worksService() {
  return {
    caseStudies: [{
      name: 'music\'em: Content Aggregation App',
      path: 'musicem',
      details: 'A MEAN Stack Progressive Web App. I developed in a 3 month Scrum sprint.',
      summary: [
        `Music'em is a PWA built with the MEAN Stack. I implemented the User-Centered Design approach in a span of 3 months
          comprised of sprints using methods that will take my project from conception, to usability testing, and finally deployment.`,
        `The final product is an app that uses a JavaScript web scraping bot to aggregate content from RollingStone, Billboard, HotnewHipHop, 8Pounds Music, EDM,
          and other currated music brands to simplify the lives of bloggers, PR Specialists, and everday music listeners.`,
        `Launching the app was a success as I was given the oppurtunity to present music'em to the Full Sail University student body, 
          and a nationwide broadcast.`,
      ],
      paragraphs: [
        `"Create a Progressive Web app using the MEAN Stack to aggregate content from a currated list of music brands to
          to save users time from digging for great music ultimately helping to simplify their lives and make discovering
          great new music effortless."`,
        `Month 1 focused on conception. Begininning with functional specs listing the features and revenue model.`,
        `Details of the functional specs were surveyed amongst peers, friends, family, and professors before confirming and
        moving on with the next step of Sprint which was creating a sitemap of the app.`,
        `Researching brands to include in the app. The process weighed the brand's influence amongst demographics of male and females
        between the ages of 16 and 34.`,
        `Month 2 focused on usability tests. using SketchApp I developed a preliminary wireframe from whiteboard sketches.
          The details of the frames took into account the functional specs feedback. The frames were a loose representation
          of what the app would represent to see if the locations of the settings bar, content, category title, and content 
          tabs are appropiate.`,
        `The next frames are of the signup section on mobile for users that are not logged in. The details of the app. are
          organzied with information architecture. The goal was to inform users within 1min. the app and sell them on music'em's 
          usefulness.`,
        'Month 3 focused on development, QA, and deployment.',
        `Music'em is built with X-Ray to create a bot that scrapes websites of interest.
          I built multiple bots per site to collect information such as: content title, images,
          links, and etc. The data is then saved to a firebase database for further access.
          AngularJS was used to bind my information from my nodejs API to the front-end. My app.
          runs on the express NodeJS server. I gained a thorough understanding of JavaScript,
          Angular's MVVM architecture and http requests from this project.`,
        ` The full project's codebase can be found on my github page here github.com/ptlergo/musicemapp.
            To view the app itself follow the link to musicemapp.com here.`,
      ],
      image: 'http://marvelapp.com/1f3ia7a?emb=1',
      case_images: [
        '../img/case-images/musicem/musicem-case-image.png',
        '../img/case-images/musicem/home-m.png',
        '../img/case-images/musicem/Functional-Specs_Page_2.png',
        '../img/case-images/musicem/Functional-Specs_Page_3.png',
        '../img/case-images/musicem/musicem-sitemap.png',
        '../img/case-images/musicem/xxl-influencers.png',
        '../img/case-images/musicem/musicem-engagement.png',
        '../img/case-images/musicem/musicem-desktop-wireframe-homepage.png',
        '../img/case-images/musicem/musicem-welcome-frames.png',
      ],
      gif_src: 'https://media.giphy.com/media/3ohzdLBDAwCtfWy6sM/giphy.gif',
      type: 'web app',
      tech: ['AngularJS', 'API', 'NodeJS', 'firebase', 'css3', 'JavaScript',
        'material design', 'X-Ray', 'google app engine',
      ],
      tags: 'PWA, angularjs, node, firebase, javascript',
      category: 'web',
    },
    {
      name: 'Event Campaign of Sylvan LaCue\'s "The Loner Tour"',
      path: 'lonertour',
      details: `Partnered with CreativesOnly, an event company. My task was to with deliver a digital strategy
                  to optimize profits and fan engagement of Sylvan LaCue's "The Loner Tour".`,
      summary: [
        ` Partnering with Florida event company CreativesOnly, I was tasked with deilvering a digital strategy
            and a platform to help launch artist Sylvan Lacue's concert at Orlando, FL's BackBooth venue for his
            nationwide tour 'The Loner Tour'.`,
        `Through the campaign I utilized my 8Pounds Music platform (built on the PHP based CMS, WordPress) 
            to operate as an Ecommerce and 'infotainment' hub.`,
        `The concert was a huge success resulting in optimal sales and a boost to all parties' brand recognition 
            and followings on Facebook, Instagram, Snapchat, and Twitter.`,
      ],
      paragraphs: [
        `Taking advantage of the Ticket Tailor service I tracked meta data of ticket sales. Data targeted were:
             purchasing method, and most importantly referal method percentage difference as shown in the chart below. 
             These information will later be of huge value in increasing future events' potential revenue.`,
        `Each link to the ticket kiosk were embeded with a Facebook pixel for additional tracking to give in-depth analytics 
            of customer demographics from the concert's Facebook event page and ad campaign I created. `,
        'The Stripe API came in handy for making easy, and secure credit card transactions with an emailed receipt.',
        `As part of the campaign other platforms advertised the concert. Most prominent was Orlando Weekly. Their publications
            is distrubuted to more than 1,000 locations citywide including Full Sail University, UCF, Valencia, and other local universities.`,
        `The campaign was a great learning experience in online marketing and collaborating with a talented team in an agile 
            work enivroment. The head liner Sylvan LaCue, would later join Saba Pivot's nationwide tour, and the event 
            company CreativesOnly, partnered with DJ Khaled's college festival in a Miami, FL.`,
        `A video recap of the event was co-directed by myself and videographer Pat Frazier. The recap was released on my 8Pounds Music
            YouTube channel for fans to relive the amazing experience whenever, and as a testimony to what type of expereince 
            could be delivered for future projects to come.`,
      ],
      image: '',
      gif_src: '../img/case-images/thelonertour/mockups/mockup-thelonertour-8pounds.png',
      case_images: [
        '../img/case-images/thelonertour/thelonertour-banner-clean-lrg.png',
        '../img/case-images/thelonertour/mockups/mockup-thelonertour-8pounds.png',
        '../img/case-images/thelonertour/mockups/mockup-thelonertour-editpage.png',
        '../img/case-images/thelonertour/stripe-api.png',
        '../img/case-images/thelonertour/mockups/mockup-thelonertour-fb-event.png',
        '../img/case-images/thelonertour/mockups/mockup-orlando-weekly-sylvan-lacue.png',
      ],
      type: 'Marketing Campaign & eCommerce',
      tech: ['WordPress', 'PHP', 'MySQL', 'BootStrap3', 'JQuery', 'Stripe API', 'Adobe PhotoShop'],
      tags: 'Stripe API, php, bootstrap, jquery, WordPress, branding, e-commerce',
      category: 'digital strategy & ecommerce',
    },
    {
      name: 'Winter Soulstice RSVP App.',
      path: 'wintersoulstice',
      details: 'PHP based Progressive Web App for concert customers to have memorable reservation experience that seeks to inform and incentivise social media engagement. ',
      summary: `This was my first use of the codeIgniter framework, it was tricky practicing MVC with PHP.
                     The bootstrap styling was simple until using the popup modal for each performer, I had to
                     add a boolean case to get the modal to open upon screen click, but because my knowledge
                     was limited at the time I did not properly develop the app. for desktops so the z-index I
                     added for the JavaScript snow effect prevented the button listening event from happening. `,
      image: '../img/winter.gif',
      case_images: [
        '../img/case-images/winter/winter-feature.gif',
      ],
      gif_src: '../img/case-images/winter/winter-soulstice-rsvp-app.gif',
      type: 'app',
      tech: ['codeIgniter', 'PHP', 'MongoDB', 'BootStrap3', 'JQuery', 'Heroku'],
      tags: 'codeigniter, php, bootstrap, jquery',
      category: 'web',
    },
    ],
    designs: [],
    Device: {
      img: '../../img/iphone.png',
    },
  };
}

angular.module('myApp').factory('worksService', worksService);
