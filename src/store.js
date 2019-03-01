import Vue from 'vue'
import Vuex from 'vuex'
import * as imagesSkills from './assets/img/skills';
import * as imagesProjects from './assets/img/projects';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects : [
            {
                img: imagesProjects.AppPlus,
                name: 'AppPlus',
                technologyes: ['html5', 'css3', 'js', 'webpack'],
                description: 'Selling landing Page with simple design and clear structure',
                links : {
                gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/AppPlus"},
                demo : { title: 'demo', url : "https://butmax91.github.io/AppPlus/dist/index.html"},
            }
            },
            {
                img: imagesProjects.Dehub,
                name: 'Dehub',
                technologyes: ['html', 'css', 'js','webpack'],
                description: ' Landing Page with simple design and clear structure',
                links : {
                    gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/PsdTemplate"},
                    demo : { title: 'demo', url : "https://butmax91.github.io/PsdTemplate/"},
                }
            },
            {
                img: imagesProjects.MachingGame,
                name: 'Maching Game',
                technologyes: ['html', 'css', 'js'],
                description: 'Matching game',
                links : {
                    gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/game"},
                    demo : { title: 'demo', url : "https://butmax91.github.io/game/"},
                }
            },
            {
                img: imagesProjects.weather,
                name: 'Weather-spa',
                technologyes: ['vue','ajax','css3'],
                description: 'Lightweight, mobile-first web app to check your local weather or any location by name or ZIP-code in real time.\n' +
                    '\n',
                links : {
                    gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/weather-app"},
                    demo : {

                        url : "",
                    },
                }
            },
            {
                img: imagesProjects.XL_Technology,
                name: 'Xl Technology',
                technologyes: ['html', 'css', 'js'],
                description: 'Landing Page with simple design and clear structure',
                links : {
                    gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/XlTechnology"},
                    demo : { title: 'demo', url : "https://butmax91.github.io/XlTechnology/"},
                }
            },
            {
                img: imagesProjects.table,
                name: 'Dinamic table',
                technologyes: ['vue'],
                description: 'Aplication wich take a json and conver it to dinamic table',
                links : {
                    gitHub : { title: 'gitHub', url : "https://github.com/Butmax91/dinamic_table"},
                    demo : { title: 'demo', url : "https://dinamic-table.herokuapp.com/"},
                }
            },

        ],

        skills : [
            {
                name: 'HTML5',
                image: imagesSkills.HTML5,
                url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
            },
            {
                name: 'CSS3',
                image: imagesSkills.CSS3,
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
            },
            {
                name: 'JavaScript',
                image: imagesSkills.JavaScript,
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
                name: 'Vue',
                image: imagesSkills.Vue,
                url: 'https://vuejs.org/',
            },
            {
                name: 'Webpack',
                image: imagesSkills.Webpack,
                url: 'https://facebook.github.io/react/',
            },
            {
                name: 'Git',
                image: imagesSkills.Git,
                url: 'https://git-scm.com/',
            },
            {
                name: 'Sass',
                image: imagesSkills.Sass,
                url: 'http://sass-lang.com/',
            },
        ]
    },
    getters : {
        getProjects(state){
            return state.projects
        },
        getSkills(state){
            return state.skills
        }
    },

    mutations: {

    },
    actions: {

    }
})
