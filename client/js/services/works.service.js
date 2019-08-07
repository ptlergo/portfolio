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
    caseStudies: [
      {
        name: 'music\'em: Content Aggregation App',
        path: 'musicem',
        details: 'A SaaS MEAN Stack Progressive Web App. I developed in a 3 month Scrum sprint.',
        summary: [
          `Music'em is a PWA built with the MEAN Stack. I implemented the User-Centered Design approach in a span of 3 months
          comprised of methods that will take my project through sprints focusing on: conception, usability testing, and deployment.`,
          `I would be given the opportunity to present music'em to the Full Sail University student body, and a nationwide broadcast detailing
          my development journey to launching a successful app.`,
        ],
        paragraphs: [
          `"In 3 months take a User-Centered Design approach to create a Progressive Web App using the MEAN Stack to aggregate content 
          from a curated list of music brands (RollingStone, HotNewHipHop, 8PoundsMusic, EDM, and etc.) to save users time from digging 
          for great music ultimately simplifying their lives and making discovering great new music effortless.`,
          `Month 1 focused on conception. I began with functional specs listing the desired features and revenue model of music'em.
          A design audit was conducted from surveying friends, family, and peers before creating a sitemap and solidifying features.`,
          `Researching brands to include in the app. The process weighed the brand's influence amongst demographics of male and females
          between the ages of 16 and 34.`,
          `Month 2 focused on usability tests. using SketchApp I developed a preliminary wireframe from my whiteboard sketches.
          The details of the frames took into account the functional specs feedback.`,
          `The next frames are of the signup section on mobile for users that are not logged in with the goal to inform users within 1min. 
          on why they want music'em.`,
          `Integrating Firebase for my database and OAuth 2.0 to make signup/signin simple and secure for users.
          As a registered Facebook developer i'm given analytics of my user-base and in app advertisement capabilities.`,
          `Music'em uses a JavaScript web bot I created to aggregate content from the curated list of websites. Each brand has their own bot
          targeting specific data stored with Firebase.`,
          `AngularJS was used to bind my information from my nodejs API to the client view. Google's material design allowed me
          to have a consistent design that translated well across all devices, adjustments to my SASS files were to implement flexbox
          changes for a more modern design feel for music'em.`,
          `The 3 month development cycle gave me a more thorough understanding of ES6, design principles, Angular's MVVM architecture, and http requests.
          Many mistakes were made but I turned them into learning experiences that would then translate into a better understanding of the product I
          wanted to deliver and could be proud of presenting and further develop.`,
          `The full project's codebase can be found on my github page here github.com/ptlergo/musicemapp.
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
          '../img/case-images/musicem/mockup-musicem-facebook.png',
        ],
        gif_src: 'https://media.giphy.com/media/3ohzdLBDAwCtfWy6sM/giphy.gif',
        type: 'web app',
        tech: ['AngularJS', 'API', 'NodeJS', 'firebase', 'css3', 'JavaScript',
          'material design', 'X-Ray', 'google app engine',
        ],
        tags: 'PWA, angularjs, node, firebase, javascript, SaaS',
        category: 'web',
      },
      {
        name: 'Event Campaign of Sylvan LaCue\'s "The Loner Tour"',
        path: 'lonertour',
        details: `Partnered with CreativesOnly, an event company. My task was to with deliver a digital strategy
                  to optimize profits and fan engagement of Sylvan LaCue's "The Loner Tour".`,
        summary: [
          ` Partnering with Florida event company CreativesOnly, I was tasked with delivering a digital strategy
            and a platform to help launch artist Sylvan LaCue's concert at Orlando, FL's BackBooth venue for his
            nationwide tour 'The Loner Tour'.`,
          `Through the campaign I utilized my 8Pounds Music platform (built on the PHP based CMS, WordPress) 
            to operate as an Ecommerce and 'infotainment' hub.`,
          `The concert was a huge success resulting in optimal sales and a boost to all parties' brand recognition 
            and followings on Facebook, Instagram, Snapchat, and Twitter.`,
        ],
        paragraphs: [
          `Taking advantage of the Ticket Tailor service I tracked meta data of ticket sales such as:
             purchasing method, and most importantly referral method percentage difference (shown in the chart below). 
             These information will later be of huge value in increasing future events' potential revenue.`,
          `Each link to the ticket kiosk were embedded with a Facebook pixel for additional tracking to give in-depth analytics 
            of customer demographics from the concert's Facebook event page and ad campaign I created. `,
          'The Stripe API came in handy for making easy, and secure credit card transactions with an emailed receipt.',
          `Influencer Marketing was used and platforms such as Orlando Weekly advertised the concert. Orlando Weekly
            is distributed to more than 1,000 locations citywide including Full Sail University, UCF, and Valencia College.`,
          `The campaign was a great learning experience in online marketing and collaborating with a talented team in an agile 
            work environment. The head liner Sylvan LaCue, would later join Saba Pivot's nationwide tour, and the event 
            company CreativesOnly, partnered with DJ Khaled's college festival in Miami, FL.`,
          `A video recap of the event was co-directed by myself and videographer Pat Frazier. The recap was released on my 8Pounds Music
            YouTube channel for fans to relive the amazing experience whenever, and as a testimony to what type of experience 
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
        type: 'web app',
        tech: ['codeIgniter', 'PHP', 'MongoDB', 'BootStrap3', 'JQuery', 'Heroku'],
        tags: 'codeigniter, php, bootstrap, jquery',
        category: 'web',
      },
      {
        name: 'QuickSling iOS App',
        path: 'quicksling',
        details: 'An iOS App Developed with Swift Designed with Apple\'s\ Human Interface Guidelines In Adobe XD',
        summary: `This was my first use of the codeIgniter framework, it was tricky practicing MVC with PHP.
                       The bootstrap styling was simple until using the popup modal for each performer, I had to
                       add a boolean case to get the modal to open upon screen click, but because my knowledge
                       was limited at the time I did not properly develop the app. for desktops so the z-index I
                       added for the JavaScript snow effect prevented the button listening event from happening. `,
        image: '../img/winter.gif',
        case_images: [
          '../img/case-images/quicksling/quicksling_feature.jpg',
          '../img/case-images/quicksling/quicksling.png',
          '../img/case-images/quicksling/appstore.png',
          '../img/case-images/quicksling/wireframe_v1_xd.png',
          '../img/case-images/quicksling/wireframe_v2_xd.png',
          '../img/case-images/quicksling/wireframe_xd.png',
          '../img/case-images/quicksling/wireframe_sketch.jpg',
          '../img/case-images/quicksling/wireframe_sketch_home.jpg',
          '../img/case-images/quicksling/whiteboard_frame.jpg',
          '../img/case-images/quicksling/whiteboard_frame_2.jpg',
          '../img/case-images/quicksling/whiteboard_frame_3.jpg',
          
        ],
        gif_src: '../img/case-images/quicksling/quicksling.png',
        type: 'app',
        tech: ['iOS', 'Swift', 'Objective C', 'Adobe XD'],
        tags: 'design, objectivec, Swift, xd, iOS',
        category: 'app',
      },
    ],
    designs: [],
    Device: {
      img: '../../img/iphone.png',
    },
  };
}

angular.module('myApp').factory('worksService', worksService);