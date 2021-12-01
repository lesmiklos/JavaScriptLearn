// Using Object literal

/*let blogPost = {
    title: 'Sit-Stand at Work',
    body:  'Once there was a little person named Jack who worked in an office.... ',
    author: 'Les Miklos',
    views:  17,
    comments: [
        {visitor: 'James Joyce', body: 'Once there was a man named Stephen Daedalus'},
        {visitor: 'Ian McEwan', body: 'First Love, Last Rites'},
       ],
    isActive: true   
    
        }
    
console.log(blogPost); */

// Blog post with Constructor function, first article not published


let post = new BlogPost('Sit-Stand at Work','Once there was a little person named Jack who worked in an office.... ',
'Les Miklos' );

console.log(post);

function BlogPost(title,body,author){
    this.title = title;
    this.body = body;
    this.author= author;
    this.views = 0;   // initially set to zero, article not published
    this.comments = [];  // array [visitor,body] - empty because article not yet published
    this.isActive = false;       
    
}
