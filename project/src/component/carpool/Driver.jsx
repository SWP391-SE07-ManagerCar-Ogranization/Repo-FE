



const driversData = [
    {
      id: 1,
      image: require('../assets/images/team1.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Gabriel Hart',
      designation: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 2,
      image: require('../assets/images/team2.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Antony',
      designation: 'Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 3,
      image: require('../assets/images/team3.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Nicholas Perry',
      designation: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 4,
      image: require('../assets/images/team4.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sarah Wills',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 5,
      image: require('../assets/images/team5.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sophia Pitt',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 6,
      image: require('../assets/images/team6.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Taylor Lopez',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 7,
      image: require('../assets/images/team7.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Ryan Giggs',
      designation: 'Content Writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 8,
      image: require('../assets/images/team8.jpg'),
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Smith',
      designation: 'SEO Expert',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    }
  ]
function Driver() {
    return (
      <section class="py-24 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
              <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 ">Drivers </h2>
          </div>
          <div class="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
                  {
                  driversData.map(driver=>{
                    return (
                      <div class="block group md:col-span-2 lg:col-span-1 ">
                      <div class="relative mb-6">
                          <img src={driver.image} alt="Antonio image"
                              class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                      </div>
                      <h4
                          class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                          {driver.name} </h4>
                      <span
                          class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{driver.designation}</span>
                      </div>
                    )
                  })
                  }
                  

          </div>
      </div>
      
      </section>
                                          
    );
  }
  

export default Driver;