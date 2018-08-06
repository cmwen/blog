module.exports = function(plop) {
  var today = new Date();
  var todayString = today.toISOString().substring(0, 10);

  // controller generator
  plop.setGenerator('blog', {
    description: 'generate a blank blog page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'blog name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `blog/${todayString}-{{dashCase name}}/index.md`,
        templateFile: 'templates/blog.md.hbs'
      }
    ]
  });

  plop.setHelper('timeStamp', function(text) {
    return today.toISOString();
  });
};
