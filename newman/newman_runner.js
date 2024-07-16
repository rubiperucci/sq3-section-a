const newman = require('newman');
 
const collections = { 
    'velosos': require('./Os Velosos - TRELLO.postman_collection.json'), 
    'powerRangers': require('./Power Rangers da Shopee - WRIKE.postman_collection.json'), 
    'qaFighters': require('./QA Fighters - JIRA.postman_collection.json'), 
    'crazyBoys': require('./The Crazy Boys V1 - TODOIST.postman_collection.json')
};

for (let i of Object.keys(collections)){
    newman.run({
        collection: collections[i],
        reporters: ['cli', 'html'],
        reporter: {
            html: {
                export: `reports/${i}.html`
            }
        }
    }).on('start', function (err, args) { 
        console.log('running a collection...');
    }).on('done', function (err, summary) {
        if (err || summary.error) {
            console.error('collection run encountered an error.');
        }
        else {
            console.log('collection run completed.');
        }
    })
};
